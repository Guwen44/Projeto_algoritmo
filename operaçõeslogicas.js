/*
passou := falso
   escreval ("Digite o nome do aluno:")
   leia (nome)
   escreval ("Digite a nota 1 do aluno:")
   leia (nota1)
   escreval ("Digite a nota 2 do aluno:")
   leia (nota2)
   media := (nota1 + nota2) / 2

   se media >= 50 entao
      passou := verdadeiro
   fimse

   se (passou) e ((media >= 50) ou (media <= 70)) entao
      escreval ("Reprovado!", nome)
   senao
      escreval ("Aprovado!", nome)
   fimse
*/

var nome, nota1, nota2, media, passou;

passou = false; 

nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digite a nota 1 do aluno:")
nota2 = prompt("Digite a nota 2 do aluno:")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if(media >=50)
    passou = true;

if(passou)
    alert("Aprovado!" + nome)
else
    alert("Reprovado!" + nome)  