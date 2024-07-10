import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  // Array que vai armazenar os objetos Conta
  private listaContas: Array<Conta> = new Array<Conta>();

  // Controlar os números das Contas
  public numero: number = 0;

  procurarPorTitular(titular: string): void {
    let buscaPorTitular = this.listaContas.filter((c) =>
      c.titular.includes(titular)
    );

    buscaPorTitular.forEach((conta) => conta.visualizar());
  }

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta) {
      buscaConta.visualizar();
    } else {
      console.log("\nA Conta não foi encontrada!");
    }
  }

  listarTodas(): void {
    for (const conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("A conta foi cadastrada com sucesso!");
  }

  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log("Conta atualizada com sucesso!");
    } else {
      console.log("\nA Conta não foi encontrada!");
    }
  }

  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log("Conta excluída com sucesso!");
    } else {
      console.log("\nA Conta não foi encontrada!");
    }
  }

  sacar(numero: number, valor: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta) {
      if (buscaConta.sacar(valor) === true) {
        console.log("\nO saque foi efetuado com sucesso!");
      }
    } else {
      console.log("\nA Conta não foi encontrada!");
    }
  }

  depositar(numero: number, valor: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta) {
      buscaConta.depositar(valor);
      console.log("\nDepósito foi efetuado com sucesso!");
    } else {
      console.log("\nA Conta não foi encontrada!");
    }
  }

  tranferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
    let buscaContaDestino = this.buscarNoArray(numeroDestino);

    if (buscaContaOrigem && buscaContaDestino) {
      if (buscaContaOrigem.sacar(valor)) {
        buscaContaDestino.depositar(valor);
        console.log("\nA transferência foi efetuada com sucesso!");
      }
    } else {
      console.log("\nA Conta de origem e/ou destino não foram encontradas!");
    }
  }

  // Outros métodos

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (const conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }
    return null;
  }
}
