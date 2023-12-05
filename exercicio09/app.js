function calcularPesoIdeal() {
    let altura = document.getElementById("altura").value;
    let pesoIdeal = (72.7 * Number(altura)) - 58;
    document.getElementById("pesoIdeal").innerHTML = "Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg.";
  }