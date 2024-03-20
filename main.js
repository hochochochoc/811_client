

window.onload = function() {
    let posicion = 0;
    mostrarCliente();
    document.getElementById("clienteSiguiente").onclick = clienteSiguiente;
    document.getElementById("clienteAnterior").onclick = clienteAnterior;
    document.getElementById("editarCliente").onclick = editarCliente;
    document.getElementById("calcEmisiones").onclick = calcEmisiones;
    document.getElementById("mostrarDescripcion").onclick = mostrarDescripcion;
};

function mostrarCliente() {
    const cliente = clientes[posicion];
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
    var form = document.getElementById("editForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

function aplicarCambio() {
    const nombreAtributo = document.getElementById("nombreAtributo").value;
    const nuevoValor = document.getElementById("nuevoValor").value;
    const client = clientes[posicion];

    if(nombreAtributo && nuevoValor.trim() !== "") {
        client[nombreAtributo] = nuevoValor;
        mostrarCliente(); // Refrescar
    }

    document.getElementById("editForm").style.display = "none";
}

function calcEmisiones() {
    const client = clientes[posicion];
    const emissions = client.numVuelos * 0.5;
    alert("Emisiones de gases de efecto invernadero: " + emissions + " toneladas de CO2");
}

function mostrarDescripcion() {
    const client = clientes[posicion];
    const description = "El cliente con el DNI de " + client.DNI + " tiene una edad de " + client.edad + 
        ", tiene la nacionalidad " + client.nacionalidad.toLowerCase() + "a y ha tomado " + client.numVuelos + " vuelos.";
    alert(description);
}