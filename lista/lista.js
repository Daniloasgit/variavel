let lista  = document.getElementById("lista-tarefa");
let itens = document.getElementById("nova-tarefa");

function adicionarTarefa() {
    var list = document.createElement("li");
    var input = document.createElement("input");

    var remove = document.createElement("button");
    remove.addEventListener("click", function(){
        lista.removeChild(list);
    }) 

    input.setAttribute("type", "checkbox")
    remove.textContent = "Remover"


    lista.appendChild(list).innerHTML = `${itens.value}`

    list.appendChild(input)
    list.appendChild(remove)
}