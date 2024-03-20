window.onload = function() {
    
    mostrarCliente();
    document.getElementById("clienteSiguiente").onclick = clienteSiguiente;
    document.getElementById("clienteAnterior").onclick = clienteAnterior;
    document.getElementById("editarCliente").onclick = editarCliente;
    document.getElementById("calcEmisiones").onclick = calcEmisiones;
    document.getElementById("mostrarDescripcion").onclick = mostrarDescripcion;
};

function mostrarCliente() {
    let cliente = clientes[posicion];
    document.getElementById('detallesCliente').innerHTML =
        "<p>DNI: " + cliente.DNI + "</p>" +
        "<p>Edad: " + cliente.edad + "</p>" +
        "<p>Nacionalidad: " + cliente.nacionalidad + "</p>" +
        "<p>Número de Vuelos: " + cliente.numVuelos + "</p>";
}

function clienteSiguiente() {
    posicion = (posicion + 1) % clientes.length;
    mostrarCliente();
}

function clienteAnterior() {
    posicion = (posicion - 1 + clientes.length) % clientes.length;
    mostrarCliente();
}

function editarCliente() {
    let form = document.getElementById("editForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

function aplicarCambio() {
    let nombreAtributo = document.getElementById("nombreAtributo").value;
    let nuevoValor = document.getElementById("nuevoValor").value;
    let cliente = clientes[posicion];

    if(nombreAtributo && nuevoValor.trim() !== "") {
        cliente[nombreAtributo] = nuevoValor;
        mostrarCliente(); // Refrescar
    }
    document.getElementById("editForm").style.display = "none";
}

function calcEmisiones() {
    let cliente = clientes[posicion];
    let emisiones = cliente.numVuelos * 0.5;
    alert("Emisiones de gases de efecto invernadero: " + emisiones + " toneladas de CO2");
}

function mostrarDescripcion() {
    let cliente = clientes[posicion];
    let description = "El cliente con el DNI de " + cliente.DNI + " tiene una edad de " + cliente.edad + 
        ", tiene la nacionalidad " + cliente.nacionalidad.toLowerCase() + "a y ha tomado " + cliente.numVuelos + " vuelos.";
    alert(description);
}