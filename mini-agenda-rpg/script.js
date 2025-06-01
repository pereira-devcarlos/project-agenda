// Seleciona o campo de texto, o botão e a lista no HTML
const campo = document.getElementById('campo-tarefa');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('lista-tarefas');

// Função responsável por adicionar uma nova tarefa na lista
function adicionarTarefa(texto) {
    // Cria um novo elemento <li> para a tarefa
    const li = document.createElement('li');
    li.textContent = texto; // Define o texto da tarefa

    // Cria o botão de remover para cada tarefa
    const btn = document.createElement('button');
    btn.textContent = 'Remover'; // Texto do botão

    // Quando clicar no botão, remove a tarefa da lista
    btn.onclick = function() {
        lista.removeChild(li);
    };

    // Adiciona o botão de remover dentro do <li>
    li.appendChild(btn);

    // Adiciona o <li> (com o botão) na lista de tarefas
    lista.appendChild(li);
}

// Quando clicar no botão "Adicionar"
botao.onclick = function() {
    // Verifica se o campo não está vazio (ignora espaços)
    if (campo.value.trim() !== '') {
        adicionarTarefa(campo.value); // Adiciona a tarefa
        campo.value = ''; // Limpa o campo de texto
    }
};
