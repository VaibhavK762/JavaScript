const todolist=[{
  name: 'make dinner',
  dueDate: '2023-10-01',
},{
  name:'wash dishes',
  dueDate: '2023-10-02',
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name,dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="
        todolist.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list') 
    .innerHTML = todoListHTML; 
}


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;


  todolist.push({
    name,
    dueDate
  });

  inputElement.value = ''; 
  renderTodoList();
}