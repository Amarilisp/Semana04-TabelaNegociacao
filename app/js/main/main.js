import { NegociacaoController } from "../controllers/negociacaoControllers.js";

const controller = new NegociacaoController();
//const btnFiltrar = document.querySelector("#filtrar");

//acessando botão usando o DOM (sempre que tiver **document**, é DOM)
const btnEnviar = document.getElementById("btnNegoc");
btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();

  controller.criarNegociacao();
});

/*btnFiltrar.addEventListener("click", (event) => {
  event.preventDefault();
  negociacaoController.filtrarNegociacao();
});*/
