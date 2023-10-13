//ACTIVA LA LISTA DE LAS IMAGENES
document.getElementById("show-list").onclick = function () {

    var l = document.getElementById('List');
    if (l.style.height == 0) {
        l.style.height = 'auto';
        l.style.opacity = '1';
    } else {
        l.style.height = '0';
        l.style.opacity = '0';
    }

};