function solucao(precos) {
    let total = 0;
    let menorValor = 0;
    for (let i = 0; i < precos.length; i++){
        total += precos[i];
    }
    if (precos.length > 4){
        let min = Math.min(...precos);
        menorValor += min;
    }
    console.log(total - menorValor);
    
}