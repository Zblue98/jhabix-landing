document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página recargue

    let email = document.getElementById("email").value.trim();
    let interes = document.getElementById("interes").value;
    let mensaje = document.getElementById("mensaje");

    let emailError = document.getElementById("email-error");
    let interesError = document.getElementById("interes-error");

    // Validar que el correo tenga formato correcto
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.classList.remove("hidden");
        return;
    } else {
        emailError.classList.add("hidden");
    }

    // Validar que se haya seleccionado una opción
    if (!interes) {
        interesError.classList.remove("hidden");
        return;
    } else {
        interesError.classList.add("hidden");
    }

    let form = event.target;
    let data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            mensaje.innerText = "✅ ¡Gracias! Te contactaremos pronto.";
            mensaje.classList.remove("text-red-600");
            mensaje.classList.add("text-green-600");
            form.reset();
        } else {
            mensaje.innerText = "❌ Hubo un error, intenta de nuevo.";
        }
    }).catch(error => {
        mensaje.innerText = "❌ Error de conexión, revisa tu internet.";
    });
});
