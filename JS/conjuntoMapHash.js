const meuConjunto = new Set(); // Recomendado utilizar objeto via variavel, pq se não ele nao acessa.

const times = ['Sao Paulo', 'Flamengo', 'Fluminense', 'Palmeiras', 'Sao Paulo'];
const meuCapeonato = new Set(times);
meuCapeonato.add([
  'Sao Paulo',
  'Flamengo',
  'Fluminense',
  'Palmeiras',
  'Sao Paulo', // Por causa que é objeto ele aceita essa repetição.
]);

const outrosTimes = ['Sao Paulo', 'Sao Paulo']; // Mesmo escrevendo dessa forma, ele aceita a repetição, novamente pois é objeto.
meuCapeonato.add(outrosTimes);

meuCapeonato.delete('Sao Paulo');

meuCapeonato.forEach((value) => {
  console.table(value);
});

// tem o metodo keys, values, entries e has

const cdfs = new Set(['Gabriel', 'Marco', 'Fabio', 'Gui', 'Ricardo']);

if (!cdfs.has('Brunera')) cdfs.add('Brunera');

console.table(cdfs);
console.log(cdfs.size); // length

const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem??');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');

console.table(meuDicionario);

const palavra = meuDicionario.get('blz');
console.log(palavra);

//-------------------------------MAP---------------------------------------------------------//

const meuDicionario2 = new Map();

const indiceContatos = [
  ['gabriel', '14145145'],
  ['marco', '1413456'],
  ['ricardo', '49814u18'],
];

meuDicionario2.set(indiceContatos[0], { msg: 'dkmqwidq' });
meuDicionario2.set(indiceContatos[1], { msg: 'mfqoafa' });
meuDicionario2.set(indiceContatos[2], { msg: 'qiu9efnq9ui' });

console.table(meuDicionario2);

const gabriel = meuDicionario2.get(indiceContatos[0]);
const marco = meuDicionario2.get(['marco', '1413456']); // nao funciona

//Possui os mesmos metodos, forEach, delete, has e clear(limpa o dicionario, mas continua existindo como vazio)
//Ainda tem o entries, keys and values.

console.log(gabriel);
console.log(marco);

for (let entrada of meuDicionario2.entries()) {
  console.log(entrada);
}

for (let valor of meuDicionario2.values()) {
  console.log(valor);
}

for (let chave of meuDicionario2.keys()) {
  console.log(chave);
}

//---------------------------HASH-------------------------------------------------------------//

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  put(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  delete(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else return false;
  }

  clear() {
    this.table = [];
    this.size = 0;
  }
}

const meusContatos = new HashTable();
meusContatos.put('gabriel', '91831314');
meusContatos.put('ricardo', '254265627');
meusContatos.put('marco', '14156567');

console.table(meusContatos.table);

console.log(meusContatos.get('ricardo'));
