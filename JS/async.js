// Assincrono é algo que não ocorre ou não se afetiva ao mesmo tempo. Como nas auals gravadas, ela é assincrono.
// Pode fazer uma coisa enquanto faz outra também.
// Make Request, Continue Working -> Get Response and do something.

// Promises: Objeto de processamento assíncrono, é uma promessa. Inicialmente o valor dela é desconhecido, ela pode ou não ser resolvida.

// A Promise tem 3 estados: Pending, Fulfilled or Rejected.

async function resolvePromise(){
  const  myPromise = new Promise((resolve, reject) => {
    window.setTimeout( () => {
      resolve(console.log('Resolvida'));
    }, 2000)
  });
  
  const resolved = await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou')
    .catch((err) => console.log(err.message));
  
  return resolved;
} 

// O await existe para parar o codigo, por exemplo, o JS iria ler o codigo com as instruções e iria dar fim na minhha promise, pois nao deu tempo de resolver, como pra ele é instataneo, ele passa pra frente e não volta mais nela
// Fazendo com que eu perca aquele pedaço do código, o await faz ele esperar, tudo isso é muito rápido.