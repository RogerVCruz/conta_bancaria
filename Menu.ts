import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";

export function main() {
  let opcao: number;

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
