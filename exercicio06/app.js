function calcularSalario() {
    let ganhoPorHora = document.getElementById("ganhoPorHora").value;
    let horasTrabalhadas = document.getElementById("horasTrabalhadas").value;
    let salario = Number(ganhoPorHora) * Number(horasTrabalhadas);
    document.getElementById("salario").innerHTML = "O total do seu salário neste mês é: " + salario;
  }