



document.querySelectorAll('.col').forEach(function($elemento) {
    $elemento.onclick = verClick;
})

function verClick(e){

    console.log(e)
}