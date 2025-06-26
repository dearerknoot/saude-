
class novoRemedio {
  constructor(img, nome, quantidade, horas) {
    this.img = img;
    this.quantidade = quantidade;
    this.horas = horas;
    this.nome = nome;
  }
}

let listaRemedios = JSON.parse(localStorage.getItem('listaRemedios')) || [];
let imagemBase64 = null; 

const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const imagemSalva = localStorage.getItem("imagemMedicamento");

if (imagemSalva) {
  previewImage.setAttribute("src", imagemSalva);
  previewImage.style.display = "block";
  previewImage.style.width = "100px";
  previewImage.style.height = "100px";
  previewImage.style.marginLeft = "120px";
}

imageInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      imagemBase64 = this.result; 
      previewImage.setAttribute("src", this.result);
      previewImage.style.display = "block";
      previewImage.style.width = "100px";
      previewImage.style.height = "100px";
      previewImage.style.marginLeft = "120px";
      localStorage.setItem("imagemMedicamento", this.result);
    });

    reader.readAsDataURL(file);
  } else {
    previewImage.style.display = "none";
    previewImage.setAttribute("src", "#");
  }
});

const voltar = document.querySelector(".voltarIMG");

voltar.addEventListener("click", () => {
  window.location.href = "index.html"; 
});

const mdTypeSelect = document.getElementById("medType");

let nomeInput = document.createElement("input");
let quantidadeInput = document.createElement("input");
let tempoInput = document.createElement("input");
let nomeH2 = document.createElement("h2");
let quantidadeH2 = document.createElement("h2");
let tempoH2 = document.createElement("h2");

let inNome = document.getElementById("inNome");
let inQnt = document.getElementById("inQnt");
let inTempo = document.getElementById("inTempo");
let enviar = document.getElementById("enviar");

nomeH2.textContent = "Nome do medicamento: ";
quantidadeH2.textContent = "Quantidade: ";
tempoH2.textContent = "Tempo: ";
tempoInput.setAttribute("placeHolder", "Ex.: 8 (8 em 8 horas)");
inNome.style.marginTop = "20px";
nomeInput.setAttribute("placeHolder", "Nome de sua preferência");

nomeInput.classList.add("inputsStyle");
quantidadeInput.classList.add("inputsStyle");
tempoInput.classList.add("inputsStyle");
nomeInput.setAttribute('id','nomeRemedio');
quantidadeInput.setAttribute('id','quantidadeRemedio');
tempoInput.setAttribute('id','tempoRemedio');

let botaoEnviar = document.createElement("button");
botaoEnviar.textContent = "Enviar";
enviar.appendChild(botaoEnviar);
botaoEnviar.classList.add("buttonEnviar", "btn", "btn-secondary");
botaoEnviar.setAttribute("data-bs-dismiss", "modal");

inNome.appendChild(nomeH2);
inNome.appendChild(nomeInput);
inQnt.appendChild(quantidadeH2);
inQnt.appendChild(quantidadeInput);
inTempo.appendChild(tempoH2);
inTempo.appendChild(tempoInput);

mdTypeSelect.addEventListener("click", () => {
  let valor = mdTypeSelect.value;

  switch (valor) {
    case "liquido":
      quantidadeInput.setAttribute("placeHolder", "Ex.: 30 (30ml)");
      break;
    case "solido":
      quantidadeInput.setAttribute("placeHolder", "Ex.: 3 (3 pílulas)");
      break;
    case "semisolido":
      quantidadeInput.setAttribute("placeHolder", "Ex.: 20 (20g)");
      break;
    case "gasoso":
      quantidadeInput.setAttribute("placeHolder", "Ex.: 40 (40ml (Spray))");
      break;
    default:
      alert("Houve um erro, já estamos resolvendo");
      return;
  }
});

botaoEnviar.addEventListener('click', () => {
  const nomeRemedio = document.getElementById('nomeRemedio').value;
  const quantidadeRemedio = document.getElementById('quantidadeRemedio').value;
  const tempoRemedio = document.getElementById('tempoRemedio').value;
  const imgRemedio = imagemBase64 || imagemSalva;

  let remedio = new novoRemedio(imgRemedio, nomeRemedio, quantidadeRemedio, tempoRemedio);
  listaRemedios.push(remedio);
  localStorage.setItem('listaRemedios', JSON.stringify(listaRemedios));

  document.getElementById('nomeRemedio').value = '';
  document.getElementById('quantidadeRemedio').value = '';
  document.getElementById('tempoRemedio').value = '';

  previewImage.style.display = "none";
  previewImage.setAttribute("src", "#");
  imagemBase64 = null;
  localStorage.removeItem("imagemMedicamento");

  mdTypeSelect.selectedIndex = 0;
});

console.log(listaRemedios);
// localStorage.clear();
