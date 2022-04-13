function startT() {
    var today = new Date();
    var horas = today.getHours();
    var minutos = today.getMinutes();
    var segundos = today.getSeconds();

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

    if (horas < 12) {
        ampm = "<span>AM</span>";
    } else {
        ampm = "<span>PM</span>";
    }

    if (horas == 0) {
        horas = 12;
    } else if (horas > 12) {
        horas = horas - 12;
    }

    horas = comprobarHorario(horas);
    minutos = comprobarHorario(minutos);
    segundos = comprobarHorario(segundos);
    document.getElementById("reloj").innerHTML = horas + ":" + minutos + ":" + segundos + " " + ampm;

    var diaSemana = dias[today.getDay()];
    var dia = today.getDate();
    var mes = meses[today.getMonth()];
    var anyo = today.getFullYear();
    var fecha = diaSemana + ", " + dia + " " + mes + " " + anyo;
    document.getElementById("fecha").innerHTML = fecha;

    var horario = setTimeout(function () { startT() }, 500);

}

function comprobarHorario(i) {
    if (i <= 9) {
        i = "0" + i;
    }


    return i;
}



function confirmacion() {
    alert("Accediendo a una dirección externa")

}