import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {
  let opcao: number;

  const c1: Conta = new Conta(1, 1234, 1, "Júlia", 800);
  const c2: Conta = new Conta(2, 1234, 2, "Marcella", 800);

  // Sacar da conta da Júlia
  console.log(`Sacando 100 da Júlia ${c1.sacar(100)}`);
  console.log(`Saldo da Júlia ${c1.saldo}`);
  console.log("Visão geral da conta da Júlia: ");
  c1.visualizar();

  // Depoistar 200 na conta da Marcella
  console.log("Depositando 200 na conta da Marcela");
  c2.depositar(200);
  console.log(`Saldo da Marcela depois do depósito ${c2.saldo}`);
  console.log("Visão geral da conta da Marcela: ");
  c2.visualizar();

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

        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");

        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");

        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");

        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");

        break;
      case 6:
        console.log("\n\nSaque\n\n");

        break;
      case 7:
        console.log("\n\nDepósito\n\n");

        break;
      case 8:
        console.log("\n\nTransferência entre Contas\n\n");

        break;
      default:
        console.log("\nOpção Inválida!\n");

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

main();
