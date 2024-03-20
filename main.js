
function displayClient() {
    const client = clientes[posicion];
    document.getElementById('clientDetails').innerHTML =
        "<p>DNI: " + client.DNI + "</p>" +
        "<p>Edad: " + client.edad + "</p>" +
        "<p>Nacionalidad: " + client.nacionalidad + "</p>" +
        "<p>Número de Vuelos: " + client.numVuelos + "</p>";
}

function nextClient() {
    posicion = (posicion + 1) % clientes.length;
    displayClient();
}

function prevClient() {
    posicion = (posicion - 1 + clientes.length) % clientes.length;
    displayClient();
}

function editClient() {
    var form = document.getElementById("editForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

function applyEdit() {
    const attributeName = document.getElementById("attributeName").value;
    const newValue = document.getElementById("newValue").value;
    const client = clientes[posicion];

    if(attributeName && newValue.trim() !== "") {
        client[attributeName] = newValue;
        displayClient(); // Refrescar
    }

    document.getElementById("editForm").style.display = "none";
}

function calculateEmissions() {
    const client = clientes[posicion];
    const emissions = client.numVuelos * 0.5;
    alert("Emisiones de gases de efecto invernadero: " + emissions + " toneladas de CO2");
}

function showDescription() {
    const client = clientes[posicion];
    const description = "El cliente con el DNI de " + client.DNI + " tiene una edad de " + client.edad + 
        ", tiene la nacionalidad " + client.nacionalidad.toLowerCase() + "a y ha tomado " + client.numVuelos + " vuelos.";
    alert(description);
}

window.onload = function() {
    displayClient();
    document.getElementById("nextClient").onclick = nextClient;
    document.getElementById("prevClient").onclick = prevClient;
    document.getElementById("editClient").onclick = editClient;
    document.getElementById("calculateEmissions").onclick = calculateEmissions;
    document.getElementById("showDescription").onclick = showDescription;
};