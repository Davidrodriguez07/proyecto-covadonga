var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("menuDesplegable");

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("oculto");
});

// GALERÍA
var imgGrande = document.getElementById("imgGrande");
var miniaturas = document.querySelectorAll(".thumb");

for (var i = 0; i < miniaturas.length; i++) {
    miniaturas[i].addEventListener("click", function() {
        imgGrande.src = this.src;
    });
}

// calculadora
var btnCalcular = document.getElementById("btnCalcular");
var resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(event) {
    event.preventDefault(); 

    var cantidadTexto = document.getElementById("cantidad").value;
    var precioTexto = document.getElementById("tipo").value;

    var cantidad = parseInt(cantidadTexto);
    var precio = parseInt(precioTexto);

    if (isNaN(cantidad) || cantidad < 1) {
        resultado.innerHTML = "Introduce una cantidad válida.";
    } else {
        var total = cantidad * precio * 1.10; // IVA 10%
        resultado.innerHTML = "Total con IVA: " + total.toFixed(2) + "€";
    }
});

// FORMULARIO DE CONTACTO
var btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    if (nombre.length < 3) {
        alert("Esta página dice: \nEl nombre debe tener al menos 3 caracteres.");
    } else if (email.indexOf("@") === -1) {
        alert("Esta página dice: \nIncluye una '@' en la dirección de correo electrónico.");
    } else {
        alert("Esta página dice: \nFormulario enviado con éxito!");
    }
});