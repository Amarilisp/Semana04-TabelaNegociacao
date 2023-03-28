export class NegociacoesView {
  //esse aqui um metodo que vai atualizar a tabela no html.
  atualizarTabela(data, quantidade, valor) {
    //aqui estamos usando o dom para pegar a tag tbody atraves do id que também chama tbody. a let vai armazenar.
    let corpoTabela = document.getElementById("tbody");

    if (corpoTabela) {
      let tr_row = corpoTabela.insertRow(0);
      let td_data = tr_row.insertCell(0);
      let td_quantidade = tr_row.insertCell(1);
      let td_valor = tr_row.insertCell(2);

      td_data.innerHTML = data;
      td_quantidade.innerHTML = quantidade;
      td_valor.innerHTML = valor;
    }
  }

  atualizarFiltro() {
    let corpoTabela = document.getElementById("tbody");

    if (corpoTabela) {
      let tr_row = corpoTabela.insertRow(0);
      let td_data = tr_row.insertCell(0);
      let td_quantidade = tr_row.insertCell(1);
      let td_valor = tr_row.insertCell(2);

      td_data.innerHTML = data;
      td_quantidade.innerHTML = quantidade;
      td_valor.innerHTML = valor;
    }
  }
}
