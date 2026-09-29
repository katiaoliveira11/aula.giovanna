let pontos = Number(prompt("Quantos pontos?"));
let anosDeCliente = Number(prompt("Quantos anos de cliente"));
let resultado = "";

if (pontos >= 99) {
    resultado = "Bronze"
} else if (pontos < 499) {
    resultado = "Prata"
} else if (pontos < 999) {
    resultado = "Ouro"
} else if (anosDeCliente >= 1) {
    resultado = "Diamante"

alert(`A sua classificação é ${resultado}`)