import Conta from './entities/Conta';
import Pagamento from './entities/Pagamento';

// controller/middleware => erros quantitativos => formatação da mensagem
// o body tem os campos corretos? { nome: '', despositoInicial: 10 }
// nome, depositoInicial => 400
// serviço => regras de negócios => erros qualitativas

const contaDoIsaac = new Conta('Isaac', 1000);
const contaDoThiago = new Conta('Thiago', 1000);
// contaDoIsaac.saldo = -50000;
// contaDoIsaac.setSaldo(-50000);
// contaDoIsaac.nome = '';
const pagamentoDaNetflix = new Pagamento({
  valor: 20,
  origem: contaDoIsaac,
  destino: contaDoThiago,
  dataDeVencimento: new Date('2022-03-27'),
  dataDePagamento: new Date('2023-03-27'),
});

pagamentoDaNetflix.efetivar();

console.log(contaDoIsaac);
console.log(contaDoThiago);