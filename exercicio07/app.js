function converterParaCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = 5 * ((Number(fahrenheit) - 32) / 9);
    document.getElementById("celsius").innerHTML = fahrenheit + " graus Fahrenheit é igual a " + celsius + " graus Celsius.";
  }