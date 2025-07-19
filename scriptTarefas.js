const add = document.getElementById('add');
const boxTarefas = document.getElementById('boxTarefas');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];


function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}


function mostrarTarefa(tarefaObj) {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const divInput = document.createElement('div');

    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', tarefaObj.id);
    checkBox.checked = tarefaObj.checked || false;

    label.setAttribute('for', tarefaObj.id);
    label.textContent = tarefaObj.texto;

    divInput.classList.add('checkbox');
    divInput.appendChild(checkBox);
    divInput.appendChild(label);
    boxTarefas.appendChild(divInput);
    
    checkBox.addEventListener('change', () => {
        const index = tarefas.findIndex(t => t.id === tarefaObj.id);
        if (index !== -1) {
            tarefas[index].checked = checkBox.checked;
            salvarTarefas();
        }
    });
}


add.addEventListener('click', () => {
    let tarefaTexto = prompt('Descreva a tarefa que você deseja salvar: ');
    if (!tarefaTexto) {
        alert('O campo não deve ficar vazio!');
    } else {
        const idUnico = 'subscribe_' + Date.now();

        const tarefaObj = {
            id: idUnico,
            texto: tarefaTexto,
            checked: false
        };

        tarefas.push(tarefaObj);
        salvarTarefas();
        mostrarTarefa(tarefaObj);
    }
});


tarefas.forEach(tarefaObj => mostrarTarefa(tarefaObj));
