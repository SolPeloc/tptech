//captura y guardado en variable, los elementos que voy a modificar
let bodyOscuro = document.getElementById("bodyOscuro")//capturo el elemento
let aOscuro = document.querySelectorAll("a")//selecciona toda las a que tiene el dom
let span =  document.querySelectorAll("span") 
let h1= document.querySelectorAll("h1")
let h2= document.querySelectorAll("h2")
let label = document.querySelectorAll("label")
let btnLuna = document.getElementById("btnLuna")//capture el boton de luna


// le paso por parametro, el evento en si, click, el segundo parametro un llamado a la funcion anonima, x no tiene nombre
//xq se las llama directamente en el momento
btnLuna.addEventListener("click",function(){
  if(bodyOscuro.classList.contains("oscuro")){ //metodo contains, para verificar si el header tiene la clase oscuro aplicado
    bodyOscuro.classList.remove("oscuro") //elimina la clase específica "oscuro"
    aOscuro.forEach(function(a)  //para iterar sobre una colección de elementos y la function se aplica para cada elemento y aplicarles un estilo, ya que hay varias a en el dom. 
    { a.style.color = ""; }) 
    span.forEach(function(s)
    {s.style.color = ""}) 
    h1.forEach(function(h1){
      h1.style.color = ""
    })
    h2.forEach(function(h2){
     h2.style.color = ""
    })
    label.forEach(function(l){
      l.style.color = ""
     })
  }else{
    bodyOscuro.classList.add("oscuro") // aplico la clase oscuro
    aOscuro.forEach(function(a) //itero las a para aplicarle el estilo color blanco 
    { a.style.color = "white"; })
    span.forEach(function(s)
    {s.style.color = "white"})
    h1.forEach(function(h1){
      h1.style.color = "white"
    })
    h2.forEach(function(h2){
     h2.style.color = "white"
    })
  label.forEach(function(l){
   l.style.color = "white"
  })
 }
}) 