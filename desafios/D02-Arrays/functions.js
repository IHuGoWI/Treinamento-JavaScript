
function adicionarTarefa(descricao) {
    const novaTarefa = {
        descricao: descricao,
        concluida: false,
    }
    tarefas.push(novaTarefa);
};

function listarTarefas() {
    console.log('Lista de tarefas:');
    for (let i = 0; i < array.length; i++) {
        const status = tarefa.concluida ? "[ ]" : "[X]";
        console.log(`${i + 1}. ${status} ${tarefas.descricao}`)
    }
}


