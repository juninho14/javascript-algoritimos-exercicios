function converterParaCentimetros() {
    let metros = document.getElementById("metros").value;
    let centimetros = Number(metros) * 100;
    document.getElementById("centimetros").innerHTML = metros + " metros é igual a " + centimetros + " centímetros.";
  }