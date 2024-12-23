function sortear() {
  let amount = parseInt(document.getElementById("quantidade").value);
  let from = parseInt(document.getElementById("de").value);
  let to = parseInt(document.getElementById("ate").value);
  verification = verifyCase(from, to, amount);
  if (verification) {
    let drawn = arrangeNumbers(getUniqueNumbers(from, to, amount));
    exibitLabel(`<label class="texto__paragrafo">Números:  ${drawn}</label>`);
    changeRestartButton(drawn);
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  exibitLabel('<label class="texto__paragrafo">Nenhum número sorteado</label>');
  changeRestartButton("disable");
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getUniqueNumbers(from, to, amount) {
  let numbersArray = [];
  for (let i = 0; i < amount; i++) {
    let randomNumber = getRandomNumber(from, to);
    while (numbersArray.includes(randomNumber)) {
      randomNumber = getRandomNumber(from, to);
    }
    numbersArray.push(randomNumber);
  }
  return numbersArray;
}

function arrangeNumbers(numbersArray) {
  let numberString = "";
  numberString = numbersArray[0];
  for (let i = 1; i < numbersArray.length; i++) {
    numberString = `${numberString} - ${numbersArray[i]}`;
  }
  return numberString;
}

function exibitLabel(text) {
  let label = document.getElementById("resultado");
  label.innerHTML = text;
}

function changeRestartButton(drawn) {
  let restartBtn = document.getElementById("btn-reiniciar");
  console.log(drawn);
  if (
    restartBtn.classList.contains("container__botao-desabilitado") &&
    drawn != undefined
  ) {
    restartBtn.classList.remove("container__botao-desabilitado");
    restartBtn.classList.add("container__botao");
  }
  if (restartBtn.classList.contains("container__botao") && drawn == "disable") {
    restartBtn.classList.remove("container__botao");
    restartBtn.classList.add("container__botao-desabilitado");
  }
}

function verifyCase(from, to, amount) {
  if (amount >= Math.abs(from - to)) {
    alert("Quantidade igual ou superior ao intervalo. Tente outros números.");
    return false;
  }
  if (isNaN(from) || isNaN(to) || isNaN(amount)) {
    alert("Digite todos os valores");
    return false;
  }
  if (
    from != parseInt(from) ||
    to != parseInt(to) ||
    amount != parseInt(amount)
  ) {
    alert("Digite todos os valores");
    return false;
  }
  if (amount <= 0 || amount > 10) {
    alert("Quantidade precisa ser maior do que 0 e menor que 10");
    return false;
  }
  console.log(from, to, amount);
  return true;
}
