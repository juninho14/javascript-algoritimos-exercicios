function calcularMedia() {
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    let nota4 = document.getElementById("nota4").value;
    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;
    document.getElementById("media").innerHTML = "A média é: " + media;
  }