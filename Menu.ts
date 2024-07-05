import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaController } from "./src/controller/ContaController";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tipoContas = ["Conta Corrente", "Conta Poupança"];

  const contas: ContaController = new ContaController();

  //Conta Corrente
  const cc1: ContaCorrente = new ContaCorrente(
    3,
    1234,
    1,
    "Amanda Magro",
    1000000.0,
    100000
  );
  const cc2: ContaCorrente = new ContaCorrente(
    4,
    1234,
    1,
    "João da Silva",
    1000.0,
    100
  );

  cc1.visualizar();
  cc2.visualizar();

  console.log(`\nSaque de R$ 25.000.00 na Conta CC1:}`);
  cc1.sacar(25000);

  console.log(`\nSaque de R$ 1.500.00 na Conta CC2: `);
  cc2.sacar(1500);

  console.log(`\nDepositar R$ 3.000.99 Reais na Conta CC2: `);
  cc2.depositar(3000.99);
  cc2.visualizar();

  const contaPoupanca: ContaPoupanca = new ContaPoupanca(
    3,
    123,
    2,
    "Victor",
    1000,
    10
  );
  contaPoupanca.visualizar();
  contaPoupanca.sacar(200);
  contaPoupanca.visualizar();
  contaPoupanca.depositar(1000);
  contaPoupanca.visualizar();

  while (true) {
    console.log(colors.bg.magentabright, colors.fg.white);
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                      NO BANQUI                      ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log("\nNO BANQUI - Sempre cuidadndo da sua saúde financeira!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar Conta\n\n");

        console.log("Digite o número da Agência: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o nome do Titular da Conta: ");
        titular = readlinesync.question("");

        console.log("Digite o tipo da Conta: ");
        tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

        console.log("Digite o Saldo da Conta: ");
        saldo = readlinesync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o limite da Conta: ");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;

          case 2:
            console.log("Digite a Data de Anivesário da Conta: ");
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }
        keyPress();
        break;

      case 2:
        console.log("\n\nListar todas as Contas\n\n");
        contas.listarTodas();
        keyPress();
        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");
        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");
        contas.procurarPorNumero(numero);

        keyPress();
        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");
        keyPress();

        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");
        keyPress();

        break;
      case 6:
        console.log("\n\nSaque\n\n");
        keyPress();

        break;
      case 7:
        console.log("\n\nDepósito\n\n");
        keyPress();

        break;
      case 8:
        console.log("\n\nTransferência entre Contas\n\n");
        keyPress();

        break;
      default:
        console.log("\nOpção Inválida!\n");
        keyPress();

        break;
    }
    console.log(colors.reset);
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Roger Cruz");
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/RogerVCruz");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
