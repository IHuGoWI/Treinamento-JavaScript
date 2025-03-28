import readlineSync from 'readline-sync';

export function jogo() {

  let userTentativa = 1;
  let totalTentativas = 3;
  let totalNumeros = 10;
  const randomNumber = Math.floor(Math.random() * totalNumeros) + 1;
  
    console.log(`Acabei de pensar em um número de 1 a ${totalNumeros}, você tem ${totalTentativas} tentativas para adivinhar qual número é.\nDigite 0 para sair.`);
    while (userTentativa <= totalTentativas) {
      let userNumber =
        userTentativa < totalTentativas
          ? readlineSync.question(`\n${userTentativa}° tentativa: `)
          : readlineSync.question(`\n(Ultima) tentativa: `);
      
      userNumber = Number(userNumber)

      if (userNumber === 0) {
        jogarNovamente();
      }

      if (isNaN(userNumber) || userNumber == "") {
        console.log("Por favor, digite um número válido.");
        continue;
      }
  
      if (userNumber < randomNumber) {
        console.log("Chutou baixo!");
      } else if (userNumber > randomNumber) {
        console.log("Chutou alto!");
      } else {
        console.log("Parabéns, você acertou!");
        jogarNovamente();
        return;
      }
      userTentativa++;
  
      if (userTentativa > totalTentativas) {
        console.log(
          `\nSuas tentativas acabaram, que pena!\nO número era (${randomNumber}).`
        );
        jogarNovamente();
        return;
      }
    }
  }
  
  export function jogarNovamente() {
    while (true) {
      let resposta = readlineSync
        .question(`\nDeseja jogar novamente? (s/n): `)
        .toLowerCase();
  
      if (resposta === "s") {
        console.clear();
        jogo();
        break;
      } else if (resposta === "n") {
        console.log("Obrigado por jogar!");
        process.exit();
      } else {
        console.log("Opção inválida! Tente novamente.");
      }
    }
  }