const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const inicio = document.getElementById("inicio");
const cumpleanos = document.getElementById("cumpleanos");
const botones = document.querySelector(".botones");

let intentosNo = 0;
let buenoSiActivo = false;

function mostrarCumpleanos() {
    inicio.classList.add("oculto");
    cumpleanos.classList.remove("oculto");
}

btnSi.addEventListener("click", function () {
    mostrarCumpleanos();
});

btnNo.addEventListener("click", function () {
    if (buenoSiActivo) {
        mostrarCumpleanos();
        return;
    }

    intentosNo++;

    if (intentosNo >= 3) {
        btnNo.textContent = "Bueno sí";
        btnNo.style.backgroundColor = "#a9d98a";
        btnNo.style.color = "#24421d";
        btnNo.style.left = "calc(50% + 15px)";
        btnNo.style.top = "0";
        btnNo.style.transform = "scale(1.05)";
        buenoSiActivo = true;
        return;
    }

    const anchoZona = botones.clientWidth;
    const altoZona = botones.clientHeight;
    const anchoBoton = btnNo.offsetWidth;
    const altoBoton = btnNo.offsetHeight;
    const margen = 5;

    const maxX = anchoZona - anchoBoton - margen * 2;
    const maxY = altoZona - altoBoton - margen * 2;

    const x = margen + Math.random() * Math.max(maxX, margen);
    const y = margen + Math.random() * Math.max(maxY, margen);

    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";

    const rotacion = Math.random() * 20 - 10;
    btnNo.style.transform = `rotate(${rotacion}deg)`;
});
