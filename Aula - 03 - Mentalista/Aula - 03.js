var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou, PARABENS"
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "O numero certo fica entre 0 e 10";
    } else {
      elementoResultado.innerHTML = "Errou, o Número secreto era "+ numeroSecreto;
    }
}
