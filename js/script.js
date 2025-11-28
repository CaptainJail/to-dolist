//Constate de deckaracion de los elementos internos del HTML.

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Funcion para añadir una nueva tarea.

function addTask(){
    if(inputBox.value === ''){
        alert("¡Debes escribir algo!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//Funcion para verificar y remover las tareas añadidas.

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

//Funcion para guardar la data en el almacenamiento local

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//Funcion para Mostrar la data guardada en el almacenamiento local
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");   
}

//Llamar a la funcion showTask para Mostrar siempre la data guardada
showTask();
