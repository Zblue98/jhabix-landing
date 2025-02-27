function iniciarCuentaRegresiva() {
    const fechaObjetivo = new Date("2025-04-26T00:00:00").getTime();

    function actualizarTiempo() {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia < 0) {
            document.getElementById("cuentaRegresiva").innerHTML = "¡JHABIX ha sido lanzado!";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Actualizar los valores en los elementos HTML
        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;

        // Aplicar parpadeo si quedan menos de 10 segundos
        const segundosElemento = document.getElementById("segundos");
        if (segundos < 10) {
            segundosElemento.classList.add("blink");
        } else {
            segundosElemento.classList.remove("blink");
        }
    }

    actualizarTiempo();
    setInterval(actualizarTiempo, 1000);
}

document.addEventListener("DOMContentLoaded", iniciarCuentaRegresiva);
