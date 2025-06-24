class novoRemedio {
  constructor(img, quantidade, horas, nome) {
    this.img = img;
    this.quantidade = quantidade;
    this.horas = horas;
    this.nome = nome;
  }
}

const voltar = document.querySelector(".voltarIMG");

voltar.addEventListener("click", () => {
  window.location.href = "index.html"; // changing page to the main
});

const mdTypeSelect = document.getElementById("medType");

//creating elements ----------------------------
let nomeInput = document.createElement("input");
let quantidadeInput = document.createElement("input");
let tempoInput = document.createElement("input");
let nomeH2 = document.createElement("h2");
let quantidadeH2 = document.createElement("h2");
let tempoH2 = document.createElement("h2");
//----------------------------------------------

//get the divs-----------------------------------
let inNome = document.getElementById("inNome");
let inQnt = document.getElementById("inQnt");
let inTempo = document.getElementById("inTempo");
let enviar = document.getElementById('enviar');
//-----------------------------------------------

nomeH2.textContent = "Nome do medicamento: ";
quantidadeH2.textContent = "Quantidade: ";
tempoH2.textContent = "Tempo: ";              // adding some css in code
tempoInput.setAttribute('placeHolder',"Ex.: 8 (8 em 8 horas)");
inNome.style.marginTop = '20px';
nomeInput.setAttribute('placeHolder','Nome de sua prefêrencia');

// adding class to the inputs---------------
nomeInput.classList.add('inputsStyle');
quantidadeInput.classList.add('inputsStyle');
tempoInput.classList.add('inputsStyle');
//------------------------------------------



let botaoEnviar = document.createElement('button');
botaoEnviar.textContent = 'Enviar';
enviar.appendChild(botaoEnviar);
botaoEnviar.classList.add('buttonEnviar')
botaoEnviar.classList.add('btn');
botaoEnviar.classList.add('btn-secondary')
botaoEnviar.setAttribute('data-bs-dismiss', 'modal');

//appendchild ----------------------
inNome.appendChild(nomeH2);
inNome.appendChild(nomeInput);

inQnt.appendChild(quantidadeH2);
inQnt.appendChild(quantidadeInput);

inTempo.appendChild(tempoH2);
inTempo.appendChild(tempoInput);
//----------------------------------


mdTypeSelect.addEventListener("click", () => {
  // function in the select from user
 
  let valor = mdTypeSelect.value;

  switch (valor) {
    case "liquido":
        quantidadeInput.setAttribute('placeHolder','Ex.: 30 (30ml)');
      break;

    case "solido":
        quantidadeInput.setAttribute('placeHolder','Ex.: 3 (3 pílulas)');
      break;

    case "semisolido":
        quantidadeInput.setAttribute('placeHolder','Ex.: 20 (20g)');

      break;

    case "gasoso":
        quantidadeInput.setAttribute('placeHolder','Ex.: 40 (40ml (Spray))');
      break;

    default:
      alert("Houve um erro, já estamos resolvendo");
      return;
  }
});
