let valor = parseInt(gets());
  
a= Math.floor(valor/100);
b= valor%100;
c= Math.floor(b/50);
d= b%50;
e= Math.floor(d/20);
f= d%20;
g= Math.floor(f/10);
h= f%10;
i= Math.floor(h/5);
j= h%5;
k= Math.floor(j/2);
l= j%2;
   
console.log(valor);
console.log(a + " nota(s) de R$ 100,00");
console.log(c + " nota(s) de R$ 50,00");
console.log(e + " nota(s) de R$ 20,00");
console.log(g + " nota(s) de R$ 10,00");
console.log(i + " nota(s) de R$ 5,00");
console.log(k + " nota(s) de R$ 2,00");
console.log(l + " nota(s) de R$ 1,00");