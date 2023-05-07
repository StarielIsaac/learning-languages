// - Pagamento
//   - origem, destino
//   - valor
//   - data de vencimento
//   - data de efetivação
//   - efetivar

import Conta from './Conta';

export default class Pagamento {
  private origem: Conta;
  private destino: Conta;
  private valor: number;
  private dataDeVencimento: Date;
  private dataDePagamento: Date;

  constructor(params: {
    origem: Conta;
    destino: Conta;
    valor: number;
    dataDeVencimento: Date;
    dataDePagamento: Date;
  }) {
    this.origem = params.origem;
    this.destino = params.destino;
    this.valor = params.valor;
    this.dataDeVencimento = params.dataDeVencimento;
    this.dataDePagamento = params.dataDePagamento;
  }

  public efetivar() {
    const valorFinal = this.calculaValorFinal();
    this.origem.debitar(valorFinal);
    this.destino.creditar(valorFinal);
  }

  private calculaValorFinal() {
    if (this.estaVencido()) {
      return this.valor * 1.2;
    }

    return this.valor;
  }

  private estaVencido() {
    return this.dataDePagamento.getTime() > this.dataDeVencimento.getTime();
  }
}