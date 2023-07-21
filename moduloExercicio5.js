export function Ex5() {

    console.log("Exercicio 5 - FOR")

// primeiros teremos
let a = 0;
let b = 1;

// imprimir eles
console.log(a);
console.log(b);

// verificar se i = 3 é menor/igual a 10.
for (let i = 3; i <= 10; i++) { 
  let c = a + b; 

  console.log(c);
  a = b;
  b = c;
}
}