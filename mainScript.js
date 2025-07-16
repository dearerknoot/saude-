const remediosBtn = document.getElementById('remedios');
const agendaBtn = document.getElementById('consultas');
const tarefasBtn = document.getElementById('tarefas');
agendaBtn.addEventListener('click',()=>{
    window.location.href = 'calendario.html';
});
remediosBtn.addEventListener('click',()=>{
    window.location.href = 'remedios.html';
})
tarefasBtn.addEventListener('click',()=>{
    window.location.href = 'tarefas.html';
})