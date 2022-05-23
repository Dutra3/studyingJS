// Listas encadeadas ou Linked Listas
// Primeiro elemento é chamado de head
// Ultimo elemento possui o apontamento para o proximo como Undefined.
// Ela é dinamica, e conserva memoria quando necessario, mas ela pecorre a lista como um todo, nao consegue ir no elemento que eu quero.
// Lista Encadeada  Simples, Duplamente Encadeada, Circular ou Ordenada

// Lista Encadeada Simples -> JS não possui ponteiro na vdd.

class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = undefined;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }

  insertFirst(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      novo.proximo = atual;
      this.head = novo;
    }

    return elemento;
  }

  insertLast(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }
    return elemento;
  }

  searchAt(posicao) {
    let atual = this.head;
    for (let i = 0; i < posicao && atual; i++) {
      atual = atual.proximo;
    }
    return atual;
  }

  insertAt(elemento, posicao) {
    const novo = new No(elemento);
    if (posicao == 0) {
      this.insertFirst(elemento);
    } else {
      const anterior = this.searchAt(posicao - 1);
      const atual = anterior.proximo;
      novo.proximo = atual;
      anterior.proximo = novo;
    }

    return elemento;
  }

  tranversal() {
    if (!this.head) {
      return undefined;
    } else {
      let atual = this.head;
      let elementosLista = [];
      while (atual) {
        elementosLista.push(atual.elemento);
        atual = atual.proximo;
      }
      return elementosLista;
    }
  }

  deleteAt(posicao) {
    let atual = this.head;
    if (posicao == 0) {
      this.head = atual.proximo;
    } else {
      let anterior = atual;
      for (let i = 0; i < posicao; i++) {
        anterior = atual;
        atual = atual.proximo;
      }
      anterior.proximo = atual.proximo;
    }
    return posicao;
  }

  indexOf(elemento) {
    let atual = this.head;
    let contador = 0;
    while (atual) {
      if (atual.elemento == elemento) {
        return contador;
        break;
      } else {
        atual = atual.proximo;
        contador++;
      }
    }
    return undefined;
  }
}

const trem = new ListaEncadeada();
console.log(trem.insertFirst('Locomotiva'));
console.log(trem.insertLast('Vagão 1'));
console.log(trem.insertLast('Vagão 2'));
console.log(trem.searchAt(2));
console.log(trem.insertFirst('Vagão de Manobra'));
console.log(trem.insertAt('Novo Vagão', 2));
trem.deleteAt(2);
trem.deleteAt(0);
console.log(trem.indexOf('Locomotiva'));
console.table(trem.tranversal());