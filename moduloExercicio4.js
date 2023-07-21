export function Ex4() {

    console.log("Exercicio 7 - FOR")

    var soma = 0;

    var contador = 1;
    
    // Enquanto o contador for menor ou igual a 100
    while (contador <= 100) {
      // Adiciona o valor do contador à soma
      soma = soma + contador;
    
      contador = contador + 1;
    }
    
    console.log("A soma é: " + soma);
}