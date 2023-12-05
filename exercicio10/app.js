function calcularSalario() {
    let ganhoPorHora = document.getElementById("ganhoPorHora").value;
    let horasTrabalhadas = document.getElementById("horasTrabalhadas").value;
    let salarioBruto = Number(ganhoPorHora) * Number(horasTrabalhadas);
    let ir = salarioBruto * 0.11;
    let inss = salarioBruto * 0.08;
    let sindicato = salarioBruto * 0.05;
    let salarioLiquido = salarioBruto - ir - inss - sindicato;
    
    document.getElementById("resultado").innerHTML = 
      "Salário Bruto: R$ " + salarioBruto.toFixed(2) + "<br>" +
      "IR (11%): R$ " + ir.toFixed(2) + "<br>" +
      "INSS (8%): R$ " + inss.toFixed(2) + "<br>" +
      "Sindicato (5%): R$ " + sindicato.toFixed(2) + "<br>" +
      "Salário Líquido: R$ " + salarioLiquido.toFixed(2);
  }