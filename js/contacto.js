
//PROBANDO EN FORMULARIO
let modal = document.getElementById("modal")
let inputName = document.getElementById("name")
let inputEmail = document.getElementById("email")
let inputTelefono = document.getElementById("telefono")
let inputMensaje = document.getElementById("mensaje")
let recibido= document.getElementById("recibido")// es el p para que me muestre los datos del name
let btnDatos = document.getElementById("btnDatos") //boton submit
let btnCerrar = document.querySelector(".cerrar"); // boton del modal
let mensajeError = document.getElementById("mensajeError")
let btnBorrar = document.getElementById("btnBorrar"); // Botón de Borrar
btnDatos.addEventListener("click",function(event){
  event.preventDefault() // para que la pagina no se recargue
  if (inputName.value && inputEmail.value && inputTelefono.value &&inputMensaje.value){
    let allData = JSON.parse(localStorage.getItem("allData")) || []; // Recuperar el objeto existente del localStorage o crear uno nuevo
    // Crear un nuevo objeto de datos de la entrada actual
     let newData = 
    { name: inputName.value,
      email: inputEmail.value,
      telefono: inputTelefono.value,
      mensaje : inputMensaje.value
    }
    // Agregar los nuevos datos al objeto existente 
  allData.push(newData);
  // Guardar el objeto actualizado en el localStorage 
  localStorage.setItem("allData", JSON.stringify(allData));//para convertir un objeto o valor de JavaScript en una cadena de texto JSON
    recibido.textContent = "recibido!" + newData.name + " En breve nos comunicaremos contigo "
    modal.classList.add("classModal")
    // Ocultar el mensaje de error si estaba visible 
     mensajeError.style.display = "none";

  }else{
    // Mostrar el mensaje de error
     mensajeError.style.display = "block";
  }

})
// Añadir manejador de eventos para cerrar el modal 
btnCerrar.addEventListener("click", function() 
{ 
  modal.classList.remove("classModal")

})
// Añadir manejador de eventos para borrar el formulario
 btnBorrar.addEventListener("click", function() 
 { 
 inputName.value = ''; inputEmail.value = ''; inputTelefono.value = ''; // // Reiniciar los valores de los campos del formulario
 mensajeError.style.display = "none"; 
}); // // Ocultar el mensaje de error