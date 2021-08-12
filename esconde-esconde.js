function solucao(numero) {
	if (numero <= 20) {
        console.log("VOCE CONSEGUE, MANINHO")
    } else if (numero >= 21) {
        for(let i = 21; i < (numero+1); i++) {
            console.log(i)
        }
    }
    
}
