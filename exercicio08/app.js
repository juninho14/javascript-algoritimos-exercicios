function converterParaFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (Number(celsius) * 9/5) + 32;
    document.getElementById("fahrenheit").innerHTML = celsius + " graus Celsius é igual a " + fahrenheit + " graus Fahrenheit.";
  }