const campo = document.getElementById('campo-tarefa');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('lista-tarefas');

botao.addEventListener('click', function() {
  const texto = campo.value;
  if (texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
    campo.value = '';
  }
});