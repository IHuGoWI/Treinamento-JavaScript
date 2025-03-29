import * as Funcoes from './functions.js'
import readlineSync from 'readline-sync';

//## Jogo de adivinhe o número ##

//Foi proposto um desafio para eu criar um programa que gere um número aleatório de 1 a 10.
//O usuário terá 3 tentativas para acertar o número.
//Se o número do usuário for menor que o número aleatório gerado, o program dirá "Chutou baixo."
//Se o número do usuário for maior que o número aleatório gerado, o program dirá "Chutou alto."
//Se o usuário acertar o programa dirá que acertou e perguntará se o usuário deseja jogar novamente.

console.clear();
while (true) {

  let escolha = readlineSync
  .question(`Vamos jogar um jogo? (s/n): `)
  .toLowerCase();

  if (escolha == "s") {
    Funcoes.jogo();
    break;

  } else if (escolha == "n"){
    console.log("\nFica para uma próxima!");
    process.exit();

  } else {
    console.log("Escolha inválida!\n");
  }
}