function iniciarCuentaRegresiva() {
    const fechaObjetivo = new Date("2025-04-26T00:00:00").getTime();
    const cuentaRegresiva = document.getElementById("cuentaRegresiva");

    function actualizarTiempo() {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia < 0) {
            cuentaRegresiva.innerHTML = "¡JHABIX ha sido lanzado!";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        cuentaRegresiva.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    actualizarTiempo();
    setInterval(actualizarTiempo, 1000);
}

document.addEventListener("DOMContentLoaded", iniciarCuentaRegresiva);