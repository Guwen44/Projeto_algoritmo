/*
Var
// Seção de Declarações das variáveis 
   valor1, valor2, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreval ("A proposta desse programa é calcular dois valores baseados na sua operação, ")
   escreval ("Digite o primeiro valor: ")
            leia(valor1)
   escreval ("Digite a operacao: Ex: + , - , * , / ")
            leia(operacao)
   escreval ("Digite o segundo valor: ")
            leia(valor2)
            
   se operacao = "+" entao
      resultado := valor1 + valor2
      senao
           se operacao = "-" entao
              resultado := valor1 - valor2
                senao
                    se operacao = "*" entao
                       resultado := valor1 * valor2
                          senao
                             se operacao = "/" entao
                                resultado := valor1 / valor2
                           fimse
                     fimse
               fimse
         fimse

         escreva ("Resultado do cálculo é: ", resultado)
*/

var valor1, valor2, resultado, operacao

function acaoBotao(params) {
    valor1 = prompt("Digite o primeiro valor")
    operacao= prompt("Digite a operacao: Ex: + , - , * , / ")
    valor2 = prompt("Digite o segundo valor")
    switch (operacao) {
            case "+":
            resultado = parseInt( valor1 ) + parseInt( valor2 )
            break;
            case "-":
            resultado = parseInt( valor1 ) - parseInt( valor2 )
            break;
            case "*":
            resultado = parseInt( valor1 ) * parseInt( valor2 )
            break;
            case "/":
            resultado = parseInt( valor1 ) / parseInt( valor2 )
            break;
    }
    document.getElementById("paragrafo").innerText = resultado
}