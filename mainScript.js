const remediosBtn = document.getElementById('remedios');
const agendaBtn = document.getElementById('consultas');
agendaBtn.addEventListener('click',()=>{
    window.location.href = 'calendario.html';
});
remediosBtn.addEventListener('click',()=>{
    window.location.href = 'remedios.html';
})