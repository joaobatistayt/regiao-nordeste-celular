const botoes = document.querySelectorAll(".botao");
const fatores = document.querySelectorAll(".fator");

botoes.forEach((botao, indice) => {
botao.addEventListener("click", () => {

    botao.classList.add("selecionado");
    fatores[indice].classList.add("selecionado");
});
});