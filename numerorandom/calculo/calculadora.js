function calcular(operacao){
    let num1 = Number((document.getElementById('n1')).value);
    let num2 = Number((document.getElementById('n2')).value);
    let resultado


    if (operacao === '+') {
        resultado = num1 + num2;
    }
    else if (operacao === '-') {
        resultado = num1 - num2;
    }
    else if (operacao === '*') {
        resultado = num1 * num2;
    }
    else if (operacao === '/') {
        if (num2 === 0) {
            resultado = 'Não é possível dividir por 0';
        } else {resultado = num1 / num2;}
    }
    document.getElementById('resultado').innerHTML = `O resultado da ${operacao} é: <strong>${resultado}</strong>`
}