const add = document.getElementById('add');
const bxTarefas = document.getElementById('boxTarefas');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
add.addEventListener('click',()=>{
    let tarefa = prompt('Descreva a tarefa que você deseja salvar: ');
    
})