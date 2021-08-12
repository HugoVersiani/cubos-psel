/*Num banco (assim como em vários outros lugares) os idosos têm preferência e, por isso, pegam sempre uma fila especial. Você ficou responsável por fazer a atualização do software que identifica, a partir da idade da pessoa, se ela faz parte do grupo de idosos.

Input Format

A entrada do problema será sempre uma variável idade do tipo number. Essa idade é sempre um número inteiro e positivo.

Output Format

Você deve imprimir na tela IDOSOS caso a pessoa seja idosa, ou seja, tenha 60 anos ou mais. Caso contrário, imprima na tela PEGUE A FILA NORMAL*/


function solucao(idade) {
	//seu codigo aqui
    
    if(idade >= 60) {
        console.log ("IDOSOS")
    } else {
        console.log("PEGUE A FILA NORMAL")
    }
    
}

function processData(input) {
    solucao(Number(input));
} 