function solucao(ano) {
    if(ano > 2021 && ano % 2 == 1){
        console.log("MEH")
    } else if (ano > 2021 && ano % 4 == 0){
        console.log('JOGOS')
    } else {
        console.log('COPA')
    }
}