 // Variáveis globais

 function somar(){
     n1 = Number(document.getElementById('n1').value)
     n2 = Number(document.getElementById('n2').value)
     var resultado = n1 + n2
     document.getElementById('res').innerHTML = `O resultado da soma é: <strong>${resultado}</strong>`
 }

 function subtrair(){
     num1 = Number(document.getElementById('n1').value)
     num2 = Number(document.getElementById('n2').value)
     var resultado = num1 - num2;
     document.getElementById('res').innerHTML = `O resultado da subtração é: <strong>${resultado}</strong>`
 }

 function multiplicar(){
     num1 = Number(document.getElementById('n1').value)
     num2 = Number(document.getElementById('n2').value)
     var resultado = num1 * num2
     document.getElementById('res').innerHTML = `O resultado da multiplicação é: <strong>${resultado}</strong>`
 }

 function dividir(){
     num1 = Number(document.getElementById('n1').value)
     num2 = Number(document.getElementById('n2').value)
     var resultado = num1 / num2
     document.getElementById('ressultado').innerHTML = `O resultado da divisão é: <strong>${resultado}</strong>`
 }

 document.getElementById('operacoes').innerText = `Calculo: ${resultado.join(', ')}`;
 document.getElementById('resultado').value = '';