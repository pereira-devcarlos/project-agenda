let btnAdd = document.getElementById("btnAdd");
let btnBuscar = document.getElementById("btnBuscar")

let buscarTarefa = document.getElementById("buscarTask");
let addTarefa = document.getElementById("addTarefa");
let tarefas = document.getElementsByClassName("task");
let campoTask = document.getElementById("campoTarefas");

// Evento para adicionar a task ao clicar no botão
btnAdd.onclick = function() {
    let texto = addTarefa.value.trim();
    if (texto !== "") {
        adicionar(texto);
        addTarefa.value="";
    }
};

function adicionar(texto){
    // Criando a div task
    let divTask = document.createElement("div");
    divTask.className = "task";

    // Criando o checkbox
    let checkTask = document.createElement("input");
    checkTask.type = "checkbox";
    checkTask.name = "task";
    checkTask.id = "checkTask";

    // Criando a div texto da task
    let textoTask = document.createElement("div");
    textoTask.id = "txtTask";
    textoTask.textContent = texto;

    // Criando o botão de remover
    let botaoRem = document.createElement("button");
    botaoRem.id = "btnRemove";
    botaoRem.textContent = "Remover";
    // Evento para remover a task
    botaoRem.onclick = function() {
        campoTask.removeChild(divTask);
    };

    divTask.appendChild(checkTask);
    divTask.appendChild(textoTask);
    divTask.appendChild(botaoRem);

    // Add divTask ao campo de tarefas
    campoTask.appendChild(divTask);

}
