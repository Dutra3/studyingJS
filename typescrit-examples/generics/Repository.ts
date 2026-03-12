import { Entity } from "./Entity";

export class Repository<T extends Entity> {

    constructor(public list: T[]) {
    }

    add(item: T): void {
        this.list.push(item);
    }
}