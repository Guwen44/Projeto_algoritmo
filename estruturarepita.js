

function acaoBotao() {
    var valor1, valor2, sairLoop
    do{
        valor1 = prompt("Digite o primeiro valor: ")
        valor2 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2) )
        sairLoop =  prompt("Deseja sair? sim/não ")
    }while(sairLoop != "sim") 
 }
        
    
