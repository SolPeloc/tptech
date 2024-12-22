

let contenedorProductos = document.getElementById("productos")


fetch('datos/productos.json') 
.then(response => response.json()) 
.then(productos => { 
  let lisasAgregadas = false; 
  let estampadasAgregadas = false;   
  productos.forEach(producto => {
          if (producto.tipo === "lisa" && !lisasAgregadas) 
          { contenedorProductos.innerHTML += ` <div class="sectionProd"> 
                                                 <h2 class="subtitulo ">Remeras Lisas</h2>
                                                </div>`; 
            lisasAgregadas = true; 
          } else if (producto.tipo === "estampada" && !estampadasAgregadas) 
              { 
                contenedorProductos.innerHTML += ` <div class="sectionProd"> 
                                                      <h2 class="subtitulo ">Remeras Estampadas</h2>
                                                    </div>`; 
                estampadasAgregadas = true
              }

              // Construir el HTML de la tarjeta 
          let cardHTML = 
            ` <div class="card">
                  <h2 id="remeralisa2">${producto.nombre}</h2>
                  <img src="/img/${producto.img}"alt="" width="100%">
                  <p>Descripción:${producto.descripción}</p> 
                  <p>Precio: $${producto.precio}</p> 
                    <a href="#" class="btn" id="carrito-${producto.id}">agregar a carrito</a>
              </div>
              ` 
      // Añadir la tarjeta al contenedor 
      contenedorProductos.innerHTML += cardHTML;
      
     
      })
      let contador = 0;
       //Ahora, asignar el event listener a los botones recién agregados 
       productos.forEach(producto => { 
        const botonCarrito = document.getElementById(`carrito-${producto.id}`)
         if (botonCarrito) 
          { botonCarrito.addEventListener("click", function() 
                    { contador++;
                      document.getElementById("carritoSuma").textContent = `${contador}`; 
                      console.log('contador:', contador); 
                      }); 
            }
        });




})



