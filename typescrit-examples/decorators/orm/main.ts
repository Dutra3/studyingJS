import pgp from 'pg-promise';

interface Connection {
    query(statement: string, params: any): Promise<any>;
    close(): Promise<void>;
}

class PostgresConnection implements Connection {
    pgp: any;

    constructor() {
        this.pgp = pgp()('postgres://gabrieldutra@localhost:5432/app');
    }
    
    async query(statement: string, params: any): Promise<any> {
        return this.pgp.query(statement, params);
    }

    async close(): Promise<void> {
        return this.pgp.$pool.end();
    }
}

class ORM {
    constructor(private connection: Connection) {
    }

    async save(entity: Entity) {
        const columns = entity.columns.map(col => col.column).join(',');
        const params = entity.columns.map((col, index) => `$${index + 1}`).join(',');
        const values = entity.columns.map(col => entity[col.property]);
        const statement = `INSERT INTO ${entity.schema}.${entity.table} (${columns}) VALUES (${params})`;
        await this.connection.query(statement, [...values]);
    }
}

class Entity {
    declare schema: string;
    declare table: string;
    declare columns: { property: string, column: string }[];
    [key: string]: any;
}

function entity(config: { schema: string; table: string }) {
    return (constructor: Function) => {
        constructor.prototype.schema = config.schema;
        constructor.prototype.table = config.table;
    };
}

function column(config: { name: string }) {
    return (target: Entity, propertyKey: string) => {
        target.columns = target.columns || [];
        target.columns.push({ property: propertyKey, column: config.name });
    };
}

@entity({ schema: 'public', table: 'book' })
class Book extends Entity {
    @column({ name: 'title' })
    title: string;
    
    @column({ name: 'author' })
    author: string;

    constructor(title: string, author: string) {
        super();
        this.title = title;
        this.author = author;
    }
}

async function init () {
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
    const connection = new PostgresConnection();
    const orm = new ORM(connection);
    await orm.save(book);
    await connection.close();
}

init();