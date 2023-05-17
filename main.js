/* Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.

  Entrada de dados: ler um número.
  Processamento: calcular o dobro.
  Saída: informar o resultado. */

let numero = prompt('Digite um número :');

let saida = numero * 2;
alert("O dobro desse número é : " + saida);
console.log(saida);


/*Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.
  Entrada de dados: ler o valor da conta.
  Processamento: calcular junto com o valor do custo do garçom.
  Saída: informar o resultado. */

  let valorJantar = prompt('Digite o valor do jantar :');
  let valorJantarFormato = parseInt(valorJantar)
  console.log(valorJantar)
  
  let taxaGarçom = prompt ('Qual a taxa do garçom?')
  let taxaGarçomFormato = parseInt(taxaGarçom)
  console.log(taxaGarçom)

 let valorTotal = valorJantarFormato+ taxaGarçomFormato;
alert("O valor total do jantar e taxa do garçom é : R$  " + valorTotal);
 



/*Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
  Entrada de dados: ler o valor da conta e a quantidade de clientes.
  Processamento: calcular o valor a ser pago por cliente.
  Saída: informar o resultado.*/

  let valorTotalConta = prompt("Digite o valor total da conta na Pizzaria: ");
  let valorTotalFormato = parseInt(valorTotalConta)

  
  let qntClientes= prompt ('Quantos clientes irão pagar a conta?')
  let qntClientesFormato = parseInt(qntClientes)
  
  let resultado = valorTotalFormato/ qntClientesFormato;
  
  alert(" O valor total da conta é R$" + valorTotalFormato + ", e " + qntClientesFormato + " clientes irão dividir a conta, logo, cada um pagará: R$ " + resultado)
 