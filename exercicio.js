import PromptSync from "prompt-sync"

import { Ex1 } from "./moduloExercicio1.js";
import { Ex2 } from "./moduloExercicio2.js";
import { Ex3 } from "./moduloExercicio3.js";
import { Ex4 } from "./moduloExercicio4.js";
import { Ex5 } from "./moduloExercicio5.js";
import { Ex6 } from "./moduloExercicio6.js";

let prompt = PromptSync();

let resposta;

// Digite o numero do exercicio que voce quer exibir
do {
    console.log("Bem vindo ao menu de exercicios! ")

    resposta = prompt("Digite um numero de 1 a 6, para escolher um exercicio, ou 'sair' para interromper o programa : ")

    switch (resposta) {
        case "1":
            //Chamar exercicio 1
            console.log("Voce escolheu o exercicio 1")
            Ex1()

            break;

        case "2":
            //Chamar exercicio 2
            console.log("Voce escolheu o exercicio 2")
            Ex2()

            break

        case "3":
            //Chamar exercicio 3
            console.log("Voce escolheu o exercicio 3")
            Ex3()

            break

        case "4":
            //Chamar exercicio 4
            console.log("Voce escolheu o exercicio 4")
            Ex4()

            break

        case "5":
            //Chamar exercicio 5
            console.log("Voce escolheu o exercicio 5")
            Ex5()

            break

        case "6":
            //Chamar exercicio 6
            console.log("Voce escolheu o exercicio 6")
            Ex6()

            break

        default:
            console.log("Voce nao escolheu nunhum exercicio")
            break;
    }

} while (resposta != "sair")