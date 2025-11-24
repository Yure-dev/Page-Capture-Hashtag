const botoes = document.querySelectorAll(".js-botao");
const fecharPopup = document.querySelector(".js-fechar");

botoes[0].addEventListener("click", () => {
  document.body.classList.toggle("popup--aberto");
});

botoes[1].addEventListener("click", () => {
  document.body.classList.toggle("popup--aberto");
});

fecharPopup.addEventListener("click", () => {
  document.body.classList.remove("popup--aberto");
});
