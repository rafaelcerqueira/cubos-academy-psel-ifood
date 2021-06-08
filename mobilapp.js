function solucao(tempo, distancia) {
	
    if(tempo < 5){
        console.log(600);
    } else if (tempo > 5 && tempo <=60){
        let valorCorridaAteUmaHora = (100 * tempo) + (50 * distancia);
        console.log(valorCorridaAteUmaHora);
    } else if (tempo > 60) {
        if(distancia < 100){
            console.log(distancia * 200)
        } else {
            console.log(distancia * 150)
        }
    }

}