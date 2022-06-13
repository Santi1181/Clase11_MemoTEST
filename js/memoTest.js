const color1 = "red"
const color2 = "blue"
const color3 = "green"
const color4 = "black"
const color5 = "violet"
const color6 = "grey"
const color7 = "orange"
const color8 = "yellow"
const color9 = "red"
const color10 = "blue"
const color11 = "green"
const color12 = "black"
const color13 = "violet"
const color14 = "grey"
const color15 = "orange"
const color16 = "yellow"

let $elementosGrilla = document.querySelectorAll('.grilla')

let arrayColores = []
let coloresEnTablero = []
let arrayMovimientos = []
let sinPendientes = 0
let movimientosJuego = 20

document.getElementById('empezarJuego').onclick = function(event) {
    iniciarJuego("Juego en Curso!!!",true,"auto")
}

document.getElementById('reanudar').onclick = function(event) {
    iniciarJuego('Presiona "Comenzar" para empezar el juego!!!',"","none") 
}

function iniciarJuego(mensaje,habilitado,posicionamiento){
    $elementosGrilla.forEach(function($elemento){
        $elemento.style.backgroundColor = 'darkcyan'
        $elemento.onclick = manejarJuego
    }) 
    arrayColores = []
    coloresEnTablero = []
    cargarColoresEnArray()
    asignarColoresATablero()
    actualizarEstado(mensaje,"reanudar")
    actualizarMovimientos(movimientosJuego = 20)
    document.getElementById('mensajeInicio').innerText = mensaje
    document.getElementById('empezarJuego').disabled = habilitado
    manejarTablero(posicionamiento)
}

function cargarColoresEnArray (){
    arrayColores.push(color1,color2,color3,color4,color5,color6,color7,color8,color9,color10,color11,color12,color13,color14,color15,color16);
    arrayColores.sort(() => Math.random() - 0.5);
}

function asignarColoresATablero (){
    for(let i=0;i<$elementosGrilla.length;i++){
        coloresEnTablero.push(arrayColores[i]);
    }
}

function manejarJuego(e){
    
    arrayMovimientos.push(e)
    document.getElementById(e.target.id).style.backgroundColor = coloresEnTablero[e.target.id.substring(4,6) - 1]
    deshabilitarSeleccion(e.target.id)

    if (arrayMovimientos.length === 2) {
        controlarSeleccion(arrayMovimientos[0],arrayMovimientos[1])
        arrayMovimientos = []
        movimientosJuego --
        actualizarMovimientos(movimientosJuego)
    }

    $elementosGrilla.forEach(function($elemento){
        if ($elemento.style.backgroundColor === 'white'){
            sinPendientes += 1
        }        
    })

    if (sinPendientes === 16 ) {
        actualizarEstado("El Juego a terminado. Has Ganado!!!","gano")
    } else if (movimientosJuego === 0){
        actualizarEstado("Perdiste!!! No quedan movimientos","perdio")
        manejarTablero("none")
    }

    sinPendientes = 0

}

function actualizarEstado(mensaje,momento){
    let $estado = document.getElementById('mensajeInicio')
    $estado.textContent = mensaje
    if (momento === "perdio"){
        $estado.classList.remove('alert-primary')
        $estado.classList.add('alert-danger')
    }   else if ( momento === "gano") {
        $estado.classList.remove('alert-primary')
        $estado.classList.add('alert-success')
    }   else if (momento === "reanudar"){
        $estado.classList.remove('alert-success')
        $estado.classList.remove('alert-danger')            
        $estado.classList.add('alert-primary')    
        }
}   

function controlarSeleccion(elemento1,elemento2){
    if (coloresEnTablero[elemento1.target.id.substring(4,6) - 1] === coloresEnTablero[elemento2.target.id.substring(4,6) - 1]){
        marcarCorrectos(elemento1.target.id,elemento2.target.id) 
    } else {
        prepararProximaJugada(elemento1.target.id,elemento2.target.id)
    }
}

function marcarCorrectos(elemento1,elemento2){
    actualizarColorSeleccion(elemento1,'white')
    actualizarColorSeleccion(elemento2,'white')
}

function prepararProximaJugada(elemento1,elemento2) {
    setTimeout(function(){actualizarColorSeleccion(elemento1,'darkcyan')},300) 
    setTimeout(function(){actualizarColorSeleccion(elemento2,'darkcyan')},500) 
    habilitarSeleccion(elemento1)
    habilitarSeleccion(elemento2)
}

function deshabilitarSeleccion(elemento){
    document.getElementById(elemento).onclick = null
}

function habilitarSeleccion(elemento){
    document.getElementById(elemento).onclick = manejarJuego
}

function actualizarMovimientos(movimientos){
    document.getElementById('movimientos').innerText = movimientos
}

function actualizarColorSeleccion(elemento,color){
    document.getElementById(elemento).style.backgroundColor = color
}

function manejarTablero(accion){
    document.querySelector('#principal').style.pointerEvents = accion
}
