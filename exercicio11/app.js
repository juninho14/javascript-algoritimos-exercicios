function verificaIdade() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    if (idade >= 18) {
      document.getElementById("mensagem").innerHTML = "Olá, " + nome + ", pode dirigir";
    } else {
      document.getElementById("mensagem").innerHTML = nome + ", volte em alguns anos";
    }
  }