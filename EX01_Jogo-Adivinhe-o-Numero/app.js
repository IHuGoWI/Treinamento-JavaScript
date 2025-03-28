import * as Funcoes from './functions.js'
import readlineSync from 'readline-sync';

//Jogo de adivinhe o número

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

