const remediosBtn = document.getElementById('remedios');
const agendaBtn = document.getElementById('consultas');
const tarefasBtn = document.getElementById('tarefas');
const infoBtn = document.getElementById('info');
agendaBtn.addEventListener('click',()=>{
    window.location.href = 'calendario.html';
});
remediosBtn.addEventListener('click',()=>{
    window.location.href = 'remedios.html';
})
tarefasBtn.addEventListener('click',()=>{
    window.location.href = 'tarefas.html';
})
infoBtn.addEventListener('click',()=>{
    window.location.href = 'info.html';
})