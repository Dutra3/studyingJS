class Pilha {

  constructor() {
    this.itens = [];
  }
  
  push(item) {
  this.itens.push(item);
  }
  
  pop() {
  this.itens.pop();
  }
  
  top() {
  return this.itens[this.itens.length - 1];
  }
  
  isEmpty() {
  return this.itens.length == 0;
  }
  
}
  
const pilha = new Pilha();
  
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40); 
pilha.push(50); 
pilha.pop();
  
console.table(pilha.isEmpty());
  
class Fila {
  
  constructor() { 
  this.itens = [];
  }
  
  enqueue(item) {
  this.itens.push(item);
  }
  
  isEmpty() {
  return this.itens.length == 0;
  }
  
  dequeue() {
  if (this.isEmpty()) return undefined;
  return this.itens.shift();
  }
  
  front() {
  return this.itens[0];
  }
  
  rear() {
  return this.itens[this.itens.length - 1];
  }
}
  
const fila = new Fila();
  
console.log(fila.isEmpty());

fila.enqueue('Ferrari');
fila.enqueue('Ford');
fila.enqueue('Willians');
fila.enqueue('Mercedez');
fila.enqueue('BMW');

fila.dequeue();
  
console.log(fila.front());
  
console.log(fila.rear());
  
console.table(fila.itens);
  
console.log(fila.isEmpty());
  
class Deque {
  
  constructor() {
    this.itens = [];
  }
  
  insertFront(item) {
    return this.itens.unshift(item);
  }
  
  insertLast(item) {
    return this.itens.push(item);
  }
  
  deleteFront() {
    if (this.isEmpty()) return undefined;
    return this.itens.shift();
  }
  
  deleteLast() {
    if (this.isEmpty()) return undefined;
    return this.itens.pop();
  }
  
  isEmpty() {
    return this.itens.length == 0;
  }
  
  front() {
    return this.itens[0]; 
  }
  
  rear() {
    return this.itens[this.itens.length - 1];
  }
  
}
  
const deque = new Deque();
  
deque.insertFront('Ferrari');
deque.insertFront('Mercedez');
deque.insertFront('Willians');
deque.insertFront('Ford');
deque.insertLast('BMW');
deque.deleteFront();
deque.deleteLast();
  

console.table(deque.itens);
console.log(deque.rear());  
console.log(deque.front()) 