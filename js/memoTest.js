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

document.querySelector('#empezarJuego').onclick = function(event) {
    arrayColores = []
    coloresEnTablero = []
    cargarColoresEnArray()
    asignarColoresATablero()
    document.querySelector('#mensajeInicio').innerText = "Juego en Curso!!!"
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


document.querySelectorAll('.col').forEach(function($elemento) {
    $elemento.onclick = manejarJuego;
})

function manejarJuego(e){
  
    arrayMovimientos.push(e)
    document.getElementById(e.target.id).style.backgroundColor = coloresEnTablero[e.target.id.substring(4,6) - 1]

    if (arrayMovimientos.length === 2) {

        if (coloresEnTablero[arrayMovimientos[0].target.id.substring(4,6) - 1] === coloresEnTablero[arrayMovimientos[1].target.id.substring(4,6) - 1]){

            marcarCorrectos(arrayMovimientos[0].target.id,arrayMovimientos[1].target.id) 
           

        } else {

            prepararProximaJugada(arrayMovimientos[0].target.id,arrayMovimientos[1].target.id)

        }

        arrayMovimientos = []
    }


    // arrayMovimientos.push[coloresEnTablero[e.target.id.substring(4,6) - 1]]

    
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.id.substring(4,6))
    
}


function marcarCorrectos(elemento1,elemento2){
    document.getElementById(elemento1).onclick = null
    document.getElementById(elemento2).onclick = null
    document.getElementById(elemento1).style.backgroundColor = 'white'
    document.getElementById(elemento2).style.backgroundColor = 'white'
}

function prepararProximaJugada(elemento1,elemento2) {
    setTimeout(function(){document.getElementById(elemento1).style.backgroundColor = 'darkcyan'},500) 
    setTimeout(function(){document.getElementById(elemento2).style.backgroundColor = 'darkcyan'},1000) 

}

function validarFinJuego(){
    let pendientes = 0
    $recuadrosGrilla = document.querySelectorAll('.col')

    for (let i=0;i < $recuadrosGrilla.length;i++){
        if (document.getElementById($recuadrosGrilla[i].target.id).style.backgroundColor != 'white') {
            pendientes += 1
        }
    }

    return pendientes
}



// $elementosGrilla.forEach (function(recuadro) {
//     // console.log(recuadro.id)
//     // recuadro.style.background = 'red'

//     cargarColoresEnArray()



// })









