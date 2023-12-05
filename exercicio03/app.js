function myFunction() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let soma = Number(num1) + Number(num2);
    document.getElementById("soma").innerHTML = "A soma é: " + soma;
  }