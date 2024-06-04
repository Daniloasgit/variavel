var button = document.getElementById ('gerar-numero').addEventListener ('click', function() {
    var numero = Math.floor(Math.random()*10) + 1;
    document.getElementById ('numero-gerado').innerHTML = numero;
})
