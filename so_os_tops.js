function solucao(produtos) {
    let top = 0;
    let total = 0;
    for (let item of produtos){
        const preco = item.preco;
        total += preco;
        //10000
        if (preco >= 10000){
            top += preco;
        }
    }
    const resultado = {
        totalTop: top,
        percentual: top / total
    }
    console.log(resultado);
}