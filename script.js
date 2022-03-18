function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;

  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEuro() {
  var valorElemento = document.getElementById("valorEuro");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);
  console.log(valorEmEuroNumerico);

  var valorEmReal = valorEmEuroNumerico * 7;

  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertidoEuro");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}