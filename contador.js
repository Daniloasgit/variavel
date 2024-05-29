var c = 1 
var button = document.getElementById ('botao-clicks').addEventListener ('click', function() {
    var contador = document.getElementById ('contador-cliques')
    contador.innerHTML = `cliques clicados: ${c++}`
})