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
    const btnRemover = document.createElement('button');

    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', tarefaObj.id);
    checkBox.checked = tarefaObj.checked || false;

    label.setAttribute('for', tarefaObj.id);
    label.textContent = tarefaObj.texto;

    btnRemover.textContent = '✖';
    btnRemover.classList.add('remover-btn');

    divInput.classList.add('checkbox');
    divInput.style.display = 'flex';
    divInput.style.alignItems = 'center';
    divInput.style.gap = '10px';

    divInput.appendChild(checkBox);
    divInput.appendChild(label);
    divInput.appendChild(btnRemover);
    boxTarefas.appendChild(divInput);

    checkBox.addEventListener('change', () => {
        const index = tarefas.findIndex(t => t.id === tarefaObj.id);
        if (index !== -1) {
            tarefas[index].checked = checkBox.checked;
            salvarTarefas();
        }
    });

    btnRemover.addEventListener('click', () => {
        const index = tarefas.findIndex(t => t.id === tarefaObj.id);
        if (index !== -1) {
            tarefas.splice(index, 1);
            salvarTarefas();
            boxTarefas.removeChild(divInput);
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
