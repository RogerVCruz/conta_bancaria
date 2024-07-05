import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  // Array que vai armazenar os objetos Conta
  private listaContas: Array<Conta> = new Array<Conta>();

  // Controlar os números das Contas
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
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
    throw new Error("Method not implemented.");
  }

  deletar(numero: number): void {
    throw new Error("Method not implemented.");
  }

  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  tranferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
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
