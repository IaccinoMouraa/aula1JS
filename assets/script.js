
/*
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 Abaixo do peso
Entre 18,5 e 24,99 Peso noemal
Entre 25 e 29,99 Acima do peso
*/

// peso / (altura*altura);

var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado voce está muito abaixo do peso!'
    }else if(imc > 17 && imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Voce está muito abaixo do peso!';
    }else if(imc >= 18.5 && imc < 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Voce está no peso ideal!';
    }else if(imc > 25 && imc <= 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Voce está acima do peso!';
    }else if(imc >= 30){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado Obesidade!';
    }

}