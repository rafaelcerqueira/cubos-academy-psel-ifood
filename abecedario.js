function solucao(letra, palavras) {
    let erros = [];
    for(let item of palavras){
        if(item[0] !== letra){
            erros.push(item);
        }
    }
    console.log(erros.length);
}