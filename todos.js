let ulTodo = document.querySelector('#app ul');
let inputTodo = document.querySelector('#app input');
let btnTodo = document.querySelector('#app button')


let todos = JSON.parse(localStorage.getItem('todos_local'));

function renderTodos() {

    ulTodo.innerHTML = '';

    for (todo of todos) {

        let liTodos = document.createElement('li'); //Cria uma li
        let textTodos = document.createTextNode(todo); //Cria um texto para a Li

        let pos = todos.indexOf(todo)//Pega a posição do todo

        let excluiTodos = document.createElement('a'); //Cria um link Excluir
        excluiTodos.setAttribute('href', '#'); //Cria o link vazio
        excluiTodos.setAttribute('onclick', 'deleteTodo(' + pos + ')') //Seta um atributo para excluir o todo caso for clicado
        let txtExcluiTodo = document.createTextNode(' Excluir'); //Cria o texto de excluir

        liTodos.appendChild(textTodos); //Adiciona o texto na li
        excluiTodos.appendChild(txtExcluiTodo); //Adiciona o texto no Link

        liTodos.appendChild(excluiTodos); //Adiciona o link Excluir na li
        ulTodo.appendChild(liTodos); //Adiciona a li e o texto na ul

    }
}
renderTodos();
btnTodo.setAttribute('onclick', 'adicionarTodos()') //Quando clicado aciona a function adicionarTodos()

function adicionarTodos() {
    let addTodos = inputTodo.value;
    todos.push(addTodos);
    renderTodos();
    saveToStrorage()
}


function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos()
    saveToStrorage()
}

function saveToStrorage() {
    localStorage.setItem('todos_local', JSON.stringify(todos));
}

