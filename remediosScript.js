// class novoRemedio {
//   constructor(img, nome, quantidade, horas, tipo) {
//     this.img = img;
//     this.quantidade = quantidade;
//     this.horas = horas;
//     this.nome = nome;
//     this.tipo = tipo;
//   }
// }

// const divLista = document.querySelector('.lista');
// let listaRemedios = JSON.parse(localStorage.getItem('listaRemedios')) || [];
// let imagemBase64 = null;

// const imageInput = document.getElementById("imageInput");
// const previewImage = document.getElementById("previewImage");
// const imagemSalva = localStorage.getItem("imagemMedicamento");

// if (imagemSalva) {
//   previewImage.setAttribute("src", imagemSalva);
//   previewImage.style.display = "block";
//   previewImage.style.width = "100px";
//   previewImage.style.height = "100px";
//   previewImage.style.marginLeft = "120px";
// }

// imageInput.addEventListener("change", function () {
//   const file = this.files[0];

//   if (file) {
//     const reader = new FileReader();
//     reader.addEventListener("load", function () {
//       imagemBase64 = this.result;
//       previewImage.setAttribute("src", this.result);
//       previewImage.style.display = "block";
//       previewImage.style.width = "100px";
//       previewImage.style.height = "100px";
//       previewImage.style.marginLeft = "120px";
//       localStorage.setItem("imagemMedicamento", this.result);
//     });
//     reader.readAsDataURL(file);
//   } else {
//     previewImage.style.display = "none";
//     previewImage.setAttribute("src", "#");
//   }
// });

// const voltar = document.querySelector(".voltarIMG");
// voltar.addEventListener("click", () => {
//   window.location.href = "index.html";
// });

// const mdTypeSelect = document.getElementById("medType");

// let nomeInput = document.createElement("input");
// let quantidadeInput = document.createElement("input");
// let tempoInput = document.createElement("input");
// let nomeH2 = document.createElement("h2");
// let quantidadeH2 = document.createElement("h2");
// let tempoH2 = document.createElement("h2");

// let inNome = document.getElementById("inNome");
// let inQnt = document.getElementById("inQnt");
// let inTempo = document.getElementById("inTempo");
// let enviar = document.getElementById("enviar");

// nomeH2.textContent = "Nome do medicamento: ";
// quantidadeH2.textContent = "Quantidade: ";
// tempoH2.textContent = "Tempo: ";
// tempoInput.setAttribute("placeHolder", "Ex.: 8 (8 em 8 horas)");
// inNome.style.marginTop = "20px";
// nomeInput.setAttribute("placeHolder", "Nome de sua preferência");

// nomeInput.classList.add("inputsStyle");
// quantidadeInput.classList.add("inputsStyle");
// tempoInput.classList.add("inputsStyle");
// nomeInput.setAttribute('id','nomeRemedio');
// quantidadeInput.setAttribute('id','quantidadeRemedio');
// tempoInput.setAttribute('id','tempoRemedio');

// let botaoEnviar = document.createElement("button");
// botaoEnviar.textContent = "Enviar";
// enviar.appendChild(botaoEnviar);
// botaoEnviar.classList.add("buttonEnviar", "btn", "btn-secondary");
// botaoEnviar.setAttribute("data-bs-dismiss", "modal");

// inNome.appendChild(nomeH2);
// inNome.appendChild(nomeInput);
// inQnt.appendChild(quantidadeH2);
// inQnt.appendChild(quantidadeInput);
// inTempo.appendChild(tempoH2);
// inTempo.appendChild(tempoInput);

// let tipoRmd = '';

// mdTypeSelect.addEventListener("change", () => {
//   let valor = mdTypeSelect.value;

//   switch (valor) {
//     case "liquido":
//       quantidadeInput.setAttribute("placeHolder", "Ex.: 30 (30ml)");
//       tipoRmd = valor;
//       break;
//     case "solido":
//       tipoRmd = valor;
//       quantidadeInput.setAttribute("placeHolder", "Ex.: 3 (3 pílulas)");
//       break;
//     case "semisolido":
//       tipoRmd = valor;
//       quantidadeInput.setAttribute("placeHolder", "Ex.: 20 (20g)");
//       break;
//     case "gasoso":
//       tipoRmd = valor;
//       quantidadeInput.setAttribute("placeHolder", "Ex.: 40 (40ml (Spray))");
//       break;
//     default:
//       alert("Houve um erro, selecione uma das opções.");
//       tipoRmd =  ""
//       break;
//   }
// });

// botaoEnviar.addEventListener('click', () => {
//   const nomeRemedio = document.getElementById('nomeRemedio').value;
//   const quantidadeRemedio = document.getElementById('quantidadeRemedio').value;
//   const tempoRemedio = document.getElementById('tempoRemedio').value;
//   const imgRemedio = imagemBase64 || imagemSalva;
//   let validar = false;

//   if(nomeRemedio.match(/[0-9]/) || nomeRemedio == ""){
//     if(nomeRemedio == ""){
//       alert("Digite um nome para o medicamento.")
//     }else{
//       alert('Escreva um nome com apenas letras.')
//     }
//   } else if(isNaN(parseInt(quantidadeRemedio))){
//     alert('Digite um número na quantidade do medicamento.')
//   } else if(isNaN(parseInt(tempoRemedio))){
//     alert('Digite um número no tempo do medicamento')
//   } else if((!imagemBase64 || imagemBase64 === "") && (!imagemSalva || imagemSalva === "")){
//     alert("Tire uma foto do seu medicamento.")
//   } else {
//     validar = true;
//   }

//   if(validar){
//     let medidaRemedio = '';
//     if(tipoRmd == 'solido'){
//       medidaRemedio = ' comprimidos';
//     }else if(tipoRmd == 'liquido'){
//       medidaRemedio = ' ml';
//     }else if(tipoRmd == 'semisolido'){
//       medidaRemedio = ' g';
//     }else if(tipoRmd == 'gasoso'){
//       medidaRemedio = ' ml (Spray)';
//     }

//     if (!tipoRmd) {
//       alert("Selecione o tipo de medicamento.");
//       return;
//     }

//     let remedio = new novoRemedio(imgRemedio, nomeRemedio, quantidadeRemedio, tempoRemedio, tipoRmd);
//     listaRemedios.push(remedio);
//     localStorage.setItem('listaRemedios', JSON.stringify(listaRemedios));

//     document.getElementById('nomeRemedio').value = '';
//     document.getElementById('quantidadeRemedio').value = '';
//     document.getElementById('tempoRemedio').value = '';

//     previewImage.style.display = "none";
//     previewImage.setAttribute("src", "#");
//     imagemBase64 = null;
//     localStorage.removeItem("imagemMedicamento");
//     mdTypeSelect.selectedIndex = 0;

//     window.location.reload();
//   }
// });

// function renderizarRemediosSalvos() {
//   listaRemedios.forEach((remedio, index) => {
//     let medidaRemedio = ' comprimidos';
//     switch (remedio.tipo) {
//       case 'solido': medidaRemedio = ' comprimidos'; break;
//       case 'liquido': medidaRemedio = ' ml'; break;
//       case 'semisolido': medidaRemedio = ' g'; break;
//       case 'gasoso': medidaRemedio = ' ml (Spray)'; break;
//     }

//     let divNovoRemedio = document.createElement('div');
//     divNovoRemedio.classList.add('item');

//     let divInfo = document.createElement('div');
//     divInfo.classList.add('info');

//     let imgItem = document.createElement('img');
//     imgItem.setAttribute('src', remedio.img);

//     let h2NomeDiv = document.createElement('h2');
//     h2NomeDiv.textContent = remedio.nome;
//     h2NomeDiv.style.fontWeight = '700';

//     let h2InfoDiv = document.createElement('h2');
//     h2InfoDiv.textContent = `${remedio.quantidade}${medidaRemedio} de ${remedio.horas} em ${remedio.horas} horas`;

//     let botaoRemover = document.createElement('img');
//     botaoRemover.setAttribute('src', 'images/X.png');
//     botaoRemover.classList.add('botao-remover');
//     botaoRemover.style.cursor = 'pointer';

 
//     botaoRemover.addEventListener('click', () => {
//       listaRemedios.splice(index, 1);
//       localStorage.setItem('listaRemedios', JSON.stringify(listaRemedios));
//       window.location.reload();
//     });

//     divInfo.appendChild(h2NomeDiv);
//     divInfo.appendChild(h2InfoDiv);

//     divNovoRemedio.appendChild(imgItem);
//     divNovoRemedio.appendChild(divInfo);
//     divNovoRemedio.appendChild(botaoRemover);
//     divLista.appendChild(divNovoRemedio);
//   });
// }

// renderizarRemediosSalvos();
class novoRemedio {
  constructor(img, nome, quantidade, horas, tipo) {
    this.img = img;
    this.quantidade = quantidade;
    this.horas = horas;
    this.nome = nome;
    this.tipo = tipo;
  }
}

const divLista = document.querySelector('.lista');
let listaRemedios = JSON.parse(localStorage.getItem('listaRemedios')) || [];
let imagemBase64 = null;

const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");

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

let tipoRmd = '';

mdTypeSelect.addEventListener("change", () => {
  let valor = mdTypeSelect.value;

  switch (valor) {
    case "liquido":
      quantidadeInput.setAttribute("placeHolder", "Ex.: 30 (30ml)");
      tipoRmd = valor;
      break;
    case "solido":
      tipoRmd = valor;
      quantidadeInput.setAttribute("placeHolder", "Ex.: 3 (3 pílulas)");
      break;
    case "semisolido":
      tipoRmd = valor;
      quantidadeInput.setAttribute("placeHolder", "Ex.: 20 (20g)");
      break;
    case "gasoso":
      tipoRmd = valor;
      quantidadeInput.setAttribute("placeHolder", "Ex.: 40 (40ml (Spray))");
      break;
    default:
      alert("Houve um erro, selecione uma das opções.");
      tipoRmd = "";
      break;
  }
});

botaoEnviar.addEventListener('click', () => {
  const imagemSalvaAtual = localStorage.getItem("imagemMedicamento");
  const nomeRemedio = document.getElementById('nomeRemedio').value;
  const quantidadeRemedio = document.getElementById('quantidadeRemedio').value;
  const tempoRemedio = document.getElementById('tempoRemedio').value;
  const imgRemedio = imagemBase64 || imagemSalvaAtual;
  let validar = false;

  if(nomeRemedio.match(/[0-9]/) || nomeRemedio == ""){
    if(nomeRemedio == ""){
      alert("Digite um nome para o medicamento.");
    }else{
      alert('Escreva um nome com apenas letras.');
    }
  } else if(isNaN(parseInt(quantidadeRemedio))){
    alert('Digite um número na quantidade do medicamento.');
  } else if(isNaN(parseInt(tempoRemedio))){
    alert('Digite um número no tempo do medicamento.');
  } else if((!imagemBase64 || imagemBase64 === "") && (!imagemSalvaAtual || imagemSalvaAtual === "")){
    alert("Tire uma foto do seu medicamento.");
  } else {
    validar = true;
  }

  if(validar){
    let medidaRemedio = '';
    if(tipoRmd == 'solido'){
      medidaRemedio = ' comprimidos';
    }else if(tipoRmd == 'liquido'){
      medidaRemedio = ' ml';
    }else if(tipoRmd == 'semisolido'){
      medidaRemedio = ' g';
    }else if(tipoRmd == 'gasoso'){
      medidaRemedio = ' ml (Spray)';
    }

    if (!tipoRmd) {
      alert("Selecione o tipo de medicamento.");
      return;
    }

    let remedio = new novoRemedio(imgRemedio, nomeRemedio, quantidadeRemedio, tempoRemedio, tipoRmd);
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

    window.location.reload();
  }
});

function renderizarRemediosSalvos() {
  listaRemedios.forEach((remedio, index) => {
    let medidaRemedio = ' comprimidos';
    switch (remedio.tipo) {
      case 'solido': medidaRemedio = ' comprimidos'; break;
      case 'liquido': medidaRemedio = ' ml'; break;
      case 'semisolido': medidaRemedio = ' g'; break;
      case 'gasoso': medidaRemedio = ' ml (Spray)'; break;
    }

    let divNovoRemedio = document.createElement('div');
    divNovoRemedio.classList.add('item');

    let divInfo = document.createElement('div');
    divInfo.classList.add('info');

    let imgItem = document.createElement('img');
    imgItem.setAttribute('src', remedio.img);

    let h2NomeDiv = document.createElement('h2');
    h2NomeDiv.textContent = remedio.nome;
    h2NomeDiv.style.fontWeight = '700';

    let h2InfoDiv = document.createElement('h2');
    h2InfoDiv.textContent = `${remedio.quantidade}${medidaRemedio} de ${remedio.horas} em ${remedio.horas} horas`;

    let botaoRemover = document.createElement('img');
    botaoRemover.setAttribute('src', 'images/X.png');
    botaoRemover.classList.add('botao-remover');
    botaoRemover.style.cursor = 'pointer';

    botaoRemover.addEventListener('click', () => {
      listaRemedios.splice(index, 1);
      localStorage.setItem('listaRemedios', JSON.stringify(listaRemedios));
      window.location.reload();
    });

    divInfo.appendChild(h2NomeDiv);
    divInfo.appendChild(h2InfoDiv);
    divNovoRemedio.appendChild(imgItem);
    divNovoRemedio.appendChild(divInfo);
    divNovoRemedio.appendChild(botaoRemover);
    divLista.appendChild(divNovoRemedio);
  });
}

renderizarRemediosSalvos();
