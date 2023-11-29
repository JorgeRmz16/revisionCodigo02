const formulario = document.querySelector("#form") // var -> const

formulario.onsubmit = function(event) { // nombres mas claros en las variables
                                        // Agregar ;
  event.preventDefault(); // funcion correcta
  
  const nombreInput = formulario.elements[0];
  const edadInput = formulario.elements[1];
  const nacionalidadInput = formulario.elements[2];

  const nombre = nombreInput.value;
  const edad = edadInput.value;

  const i = nacionalidadInput.selectedIndex;
  const nacionalidad = nacionalidadInput.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreInput.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    event.classList.add("error")
  }

if (nombre.length > 0 && edad > 18 ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }else{
    console.log('Valores invalidos')
  };
};

const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  const nacionalidades = { // Cambiar los if
    "ar": "Argentina",
    "mx": "Mexicana",
    "vnzl": "Venezolana",
    "per": "Peruana"
  };
  if (nacionalidades.hasOwnProperty(nacionalidad)) {
    nacionalidad = nacionalidades[nacionalidad];
  }
// Agregar tabulacion
  const lista = document.getElementById("lista-de-invitados");
  const elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // added -> add
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span");
    const inputNombre = document.createElement("input");
    const espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }
  //Crear elementos que creo que no sirven

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
  // this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove()
    };
};