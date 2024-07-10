import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaController } from "./src/controller/ContaController";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    valor,
    numeroDestino,
    aniversario: number;
  let titular: string;
  const tipoContas = ["Conta Corrente", "Conta Poupança"];

  const contas: ContaController = new ContaController();

  //Conta Corrente
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      1234,
      1,
      "Amanda Magro",
      1000000.0,
      100000
    )
  );

  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      1234,
      1,
      "João da Silva",
      1000.0,
      100.0
    )
  );

  contas.cadastrar(
    new ContaPoupanca(
      contas.gerarNumero(),
      1234,
      1,
      "Geana Almeida",
      10000,
      100
    )
  );

  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 123, 2, "Jean Lima", 15000, 10)
  );

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

        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta) {
          console.log("Digite o número da Agência: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o nome do Titular da Conta: ");
          titular = readlinesync.question("");

          console.log("Digite o Saldo da Conta: ");
          saldo = readlinesync.questionFloat("");

          tipo = conta.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite o limite da Conta: ");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;

            case 2:
              console.log("Digite a Data de Anivesário da Conta: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(`Conta número ${numero} não foi encontrada!`);
        }

        keyPress();

        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");

        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");

        contas.deletar(numero);

        keyPress();

        break;
      case 6:
        console.log("\n\nSaque\n\n");

        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");

        console.log("Digite o valor do saque: ");
        valor = readlinesync.questionFloat("");

        contas.sacar(numero, valor);

        keyPress();
        break;
      case 7:
        console.log("\n\nDepósito\n\n");

        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");

        console.log("Digite o valor do depósito: ");
        valor = readlinesync.questionFloat("");

        contas.depositar(numero, valor);
        keyPress();

        break;
      case 8:
        console.log("\n\nTransferência entre Contas\n\n");

        console.log("Digite o número da conta de origem: ");
        numero = readlinesync.questionInt("");

        console.log("Digite o número da conta de destino: ");
        numeroDestino = readlinesync.questionInt("");

        console.log("Digite o valor do saque: ");
        valor = readlinesync.questionFloat("");

        contas.tranferir(numero, numeroDestino, valor);

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
