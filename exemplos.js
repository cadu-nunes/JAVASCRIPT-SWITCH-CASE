//Instruções para utilizar prompt no Node:

//(NO TERMINAL) Instale o "prompt-sync" no Node.js:

//npm install prompt-sync
​
//Salve o código em um arquivo .js.

//Criar um objeto prompt no seu codigo com o comando var prompt = require("prompt-sync")()

//Execute o programa no Node.js:

//node nome_do_arquivo.js



//Exemplo 4: Exibir o nome do dia da semana com base em um número.
let dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Número inválido");
}

//Exemplo 5: Menu de ações.
let acao = "salvar";

switch (acao) {
  case "salvar":
    console.log("O arquivo foi salvo.");
    break;
  case "abrir":
    console.log("O arquivo foi aberto.");
    break;
  case "excluir":
    console.log("O arquivo foi excluído.");
    break;
  default:
    console.log("Ação desconhecida.");
}