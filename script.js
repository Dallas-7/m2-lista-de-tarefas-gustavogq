const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks){
  const listaTarefa = document.querySelector(".tasks__list")

  listaTarefa.innerHTML = ""

  for (let i = 0; i < tasks.length; i++){
    const itemLista = createTaskItem(tasks[i], i);
    listaTarefa.appendChild(itemLista)
  }
}

function createTaskItem(tarefa, index) {
  const li = document.createElement("li")
  const div = document.createElement("div")
  const span = document.createElement("span")
  const p = document.createElement("p")
  const button = document.createElement("button")

  li.classList.add("task__item")
  div.classList.add("task-info__container")
  span.classList.add("task-type")
  button.classList.add("task__button--remove-task")

  if (tarefa.type.toLowerCase() === "urgente") {
    span.classList.add("span-urgent");
  } else if (tarefa.type.toLowerCase() === "importante") {
    span.classList.add("span-important");
  } else if (tarefa.type.toLowerCase() === "normal") {
    span.classList.add("span-normal");
  }

  p.textContent = tarefa.title

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  li.setAttribute('data-index' , index)

  button.addEventListener('click', function() {
    const indexToRemove = parseInt(li.getAttribute('data-index'));
    tasks.splice(indexToRemove, 1);
    renderElements(tasks)
  });

  return li;
}

const botao = document.querySelector(".form__button--add-task")
const form = document.querySelector('.form__container');
const titleInput = document.getElementById('input_title');
const typeSelect = document.querySelector('.form__input--priority');

botao.addEventListener("click", function(event){
  event.preventDefault();

  const titleValue = titleInput.value.trim()
  const typeValue = typeSelect.value.trim()

  if (!titleValue || !typeValue){
    alert('por favor, preencha todos os campos');
    return;
  }

  const novaTarefa = {
    title: titleValue,
    type: typeValue.charAt(0).toUpperCase() + typeValue.slice(1)
  }

  tasks.push(novaTarefa);
  renderElements(tasks);

  titleInput.value = '';
  typeSelect.value = '';
})

document.addEventListener("DOMContentLoaded", function() {
  renderElements(tasks);
});