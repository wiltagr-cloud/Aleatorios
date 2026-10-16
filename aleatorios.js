
let aleatorios = [];

function generarAleatorios() {

    // Inicializar el arreglo
    aleatorios = [];

    // Obtener el número ingresado por el usuario
    let cantidad = document.getElementById("txtCantidad").value;

    cantidad = Number(cantidad);

    // Validar que sea un número entre 5 y 20
    if (!Number.isInteger(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Ingrese un número entre 5 y 20");
        return;
    }

    // Recorrer desde 0 hasta la cantidad ingresada
    for (let indice = 0; indice < cantidad; indice++) {

        console.log(indice);

        // Generar un número aleatorio
        let numero = generarNumeroAleatorio();

        // Agregar el número al arreglo
        aleatorios.push(numero);
    }

    // Mostrar los resultados en pantalla
    mostrarResultados(aleatorios);
}

function mostrarResultados(arregloNumeros) {

    let contenido = "";

    contenido += "<table>";
    contenido += "<tr>";
    contenido += "<th>Índice</th>";
    contenido += "<th>Número aleatorio</th>";
    contenido += "</tr>";

    for (let indice = 0; indice < arregloNumeros.length; indice++) {

        contenido += "<tr>";
        contenido += "<td>" + indice + "</td>";
        contenido += "<td>" + arregloNumeros[indice] + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";

    let componente = document.getElementById("divResultados");
    componente.innerHTML = contenido;
}
