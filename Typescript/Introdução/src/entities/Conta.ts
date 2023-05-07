// Conta -> Classe
// Características: saldo, nomeDoCliente
// - Deve ser possível clientes criarem contas com um valor depositado inicialmente; 
// - O depósito mínimo é 100 reais.

// Encapsulamento

export default class Conta {
  private _saldo: number;
  private _nome: string;

  constructor(nomeDoCliente: string, depositoInicial: number) {
    if (depositoInicial < 100) {
      throw new Error('DEPOSITO_INSUFICIENTE');
    }

    this._nome = nomeDoCliente;
    this._saldo = depositoInicial;
  }

  // ABSTRAINDO COMPORTAMENTOS
  // ABSTRAÇÃO

  public debitar(valor: number) {
    const saldoFinal = this._saldo - valor;

    if (saldoFinal < 0) {
      throw new Error('SALDO_INSUFICIENTE');
    }

    this._saldo = saldoFinal;
  }

  public creditar(valor: number) {
    this._saldo += valor;
  }

  // metodos de acesso
  // sintaxe classica
  public getSaldo(): number {
    return this._saldo;
  }

  // public setSaldo(valor: number): void {
  //   if (valor < 0) {
  //     throw new Error('SALDO_INVALIDO');
  //   }

  //   this._saldo = valor;
  // }

  // sintaxe typescript moderna
  public get nome(): string {
    return this._nome.toUpperCase();
  }

  public set nome(novoNome: string) {
    if (novoNome.length === 0) {
      throw new Error('NOME_VAZIO');
    }

    this._nome = novoNome;
  }
}