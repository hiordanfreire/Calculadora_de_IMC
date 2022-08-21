const calcular = document.getElementById('calcular');

function calculoIMC(){
  
  const nome = document.getElementById('nome');
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if(nome !== '' && altura !== '' && peso !== ''){
    
    const valorIMC = (peso / (altura * altura));
    classificacaodoIMC(valorIMC);
    
  }else{
    resultado.textContent = 'É necessário o preenchimento de todos os valores.';
  }

}

function classificacaodoIMC(valorIMC){

  let classificacaoIMC = '';

  if (valorIMC < 18.5){
    classificacaoIMC = 'abaixo do peso';
  }else if(valorIMC < 25){
    classificacaoIMC = 'peso ideal';
  }else if(valorIMC < 30){
    classificacaoIMC = 'levemente acima do peso';
  }else if(valorIMC < 35){
    classificacaoIMC = 'obesidade grau I';
  }else if(valorIMC < 40){
    classificacaoIMC = 'obesidade grau II';
  }else{
    classificacaoIMC = 'obsidade grau III';
  }

  resultado.textContent = `${nome.value}, seu IMC é ${valorIMC.toFixed(1)} e você está ${classificacaoIMC}`;


}

calcular.addEventListener('click', calculoIMC);