function Converter() {
    var valorElemento = document.getElementById("valor");

var valor = valorElemento.value;
var valorDoEuro = parseFloat(valor);

var valorDoReal = valorDoEuro * 5.54;
    console.log("valorReal");
    var elementoConverção = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é R$ " + valorDoReal;
    elementoConverção.innerHTML = valorConvertido;
}
