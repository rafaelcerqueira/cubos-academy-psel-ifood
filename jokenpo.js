function solucao(joao, andre) {

    var opcao1 = 'PEDRA';
    var opcao2 = 'PAPEL';
    var opcao3 = 'TESOURA'


  if (joao == andre){
    console.log('EMPATE');
  } else if (joao == opcao1 && andre == opcao2){
    console.log('ANDRE');
  } else if (joao == opcao1 && andre == opcao3){
    console.log('JOAO');
  } else if (joao == opcao2 && andre == opcao1){
    console.log('JOAO');
  } else if (joao == opcao2 && andre == opcao3){
    console.log('ANDRE');
  } else if (joao == opcao3 && andre == opcao1){
    console.log('ANDRE');
  } else if (joao == opcao3 && andre == opcao2){
    console.log('JOAO');
  }
   
}