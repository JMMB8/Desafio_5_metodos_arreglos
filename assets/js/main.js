
const tareas = [{
    id: 1, text: "Hacer la mercado", estado:false },
    { id: 2, text: "Hacer el desafio", estado:false},
    {id: 3,text: "Sacar el perro", estado:false},];

    let idContador = 4;

function agregarTareas() {
const inputT = document.getElementById('InputT').value;

const tarea = {
id: idContador++,
text: inputT,
estado: false,
}

tareas.push(tarea);

document.getElementById('InputT').value = '';
actualizarListaTareas();

}

function actualizarListaTareas() {
const listaTareas = document.getElementById('listaTareas');
let template = '';

for (const tarea of tareas){
template += `
<tr class="${tarea.estado ? 'completed' : ''}">
    <td>${tarea.id}</strong></td>
    <td>${tarea.text}</td>
    <td><input onclick="cambiarEstado(${tarea.id})" type="checkbox" ${tarea.estado ? 'checked' : ''}></td>
    <td><button onclick="eliminarTarea(${tarea.id})" <i class="fa-solid fa-trash"></i></butto></td>
</tr>`    
    ;  
}
listaTareas.innerHTML = template;
document.querySelector("#totalTareas").innerHTML = contarTareas();
document.querySelector("#tareasRealizadas").innerHTML = contarTareasRealizadas();
}
const inputT = document.getElementById('InputT');
inputT.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarTareas();
    }
});

document.getElementById('btnAgregar').addEventListener('click', agregarTareas);

function eliminarTarea(numeroId) {
const idTareaEliminar= tareas.findIndex( (tarea) => tarea.id === numeroId);
tareas.splice(idTareaEliminar, 1);
actualizarListaTareas();
}

function contarTareas() {
const cantidadTareas = tareas.length;
return cantidadTareas;
}


function cambiarEstado(idElementoSeleccionado) {
const posicion = tareas.findIndex((tarea) => {
if (idElementoSeleccionado === tarea.id) {
return true;
}
return false;
});

tareas[posicion].estado = !tareas[posicion].estado;
actualizarListaTareas();
}

function contarTareasRealizadas(){
const cantidadTareasEstado = tareas.filter((tarea) => tarea.estado);
const valorCantidadTareasEstado = cantidadTareasEstado.length;
return valorCantidadTareasEstado;
}

actualizarListaTareas();