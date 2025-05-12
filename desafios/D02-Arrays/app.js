import readlineSync from "readline-sync";

// let listaDeCompras = ['Nescau', 'Leite', 'Pão', 'Queijo', 'Bolo'];
// console.log(listaDeCompras);

// listaDeCompras.unshift('Café');

// listaDeCompras[1] = 'Ninho'
// console.log(listaDeCompras);

// //console.log(listaDeCompras);

// //listaDeCompras.shift();
// //console.log(listaDeCompras);

// //console.log(listaDeCompras.length);

// console.log('\nTotal de itens:')
// for (let i = 0; i < listaDeCompras.length; i++) {
//     console.log(`Item ${i + 1}: ${listaDeCompras[i]}`)
// }

// import * as Funcoes from "./functions";

let tarefas = [];

function adicionarTarefa(descricao) {
    const novaTarefa = {
        descricao: descricao,
        concluida: false,
    }
    tarefas.push(novaTarefa);
};

function listarTarefas() {
    console.log('Lista de tarefas:');
    tarefas.forEach((tarefa, i) => {
        const status = tarefa.concluida ? "[X]" : "[ ]";
        console.log(`${i + 1}. ${status} ${tarefa.descricao}`)
    })
    console.log("");
};

adicionarTarefa("Treinar JavaScript");
listarTarefas();

