

document.addEventListener('DOMContentLoaded', function() {
  
  
  var botonIniciar = document.getElementById('iniciar');
  var botonAgregar = document.getElementById('agregar');
  var botonFinalizar = document.getElementById('finalizar');
  var botonCancelar = document.getElementById('cancelar');


  botonIniciar.addEventListener('click', function(){
    Swal.fire({
        title: '¿DESEAS RELIZAR PEDIDO?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d35400',
        cancelButtonColor: '#d33',
        confirmButtonText: 'INICIAR',
        cancelButtonText: 'CANCELAR',
        background: '#ffffff'
    }).then((result) => {
      
      if (result.isConfirmed) {
        datos.style.display = "block";
        iniciar.style.display = "none"
        botonAgregar.style.display = "block"
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        datos.style.display = "none";
        botonAgregar.style.display = "none"
    }

    })
});


  botonAgregar.addEventListener('click', function() {
    
    Swal.fire({
      title: '¿DESEAS AGREGAR SUBLIME A TU ORDEN?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d35400',
      cancelButtonColor: '#d33',
      confirmButtonText: 'AÑADIR',
      cancelButtonText: 'CANCELAR',
      background: '#ffffff'
    }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire({
              title: '¿AGREGAR DETALLE A TU PLATILLO?',
              text: "¿Deseas personalizar tu platillo?",
              input: 'text',
              inputPlaceholder: 'Añade detalle aquí',
              showCancelButton: true,
              confirmButtonText: 'CONFIRMAR',
              cancelButtonText: 'NO AGREGAR DETALLE',
              cancelButtonColor: '#d33',
              confirmButtonColor: '#d35400',
              inputValidator: (value) => {
                if (!value) {
                  return '¡Necesitas escribir algo!';
                }
              }
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: 'PLATILLO AÑADIDO A LA ORDEN',
                  timer: 2000,
                  position: "top-end",
                  icon: 'success',
                  showConfirmButton: false,
                  text: `Detalle agregado: ${result.value}`,
                })
                // Swal.fire(`Detalle agregado: ${result.value}`);
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                  title: 'PLATILLO AÑADIDO A LA ORDEN',
                  timer: 2000,
                  icon: 'success',
                  position: "top-end",
                  showConfirmButton: false,
                  text: `Sin detalle`,
                })
            }
            });
      }
    });

  });

 


  botonFinalizar.addEventListener('click', async function(){
    Swal.fire({
      title: '¿DESEAS CONFIRMAR TU PEDIDO?',
      text: 'Una vez confirmada la orden, tus datos seran enviados a nuestro personal, para iniciar a preparar tu pedido',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d35400',
      cancelButtonColor: '#d33',
      confirmButtonText: 'CONFIRMAR',
      cancelButtonText: 'CANCELAR',
      background: '#ffffff'
    }).then( async (result) => {
        
      if (result.isConfirmed) {


        const { value: formValues } = await Swal.fire({
          title: "AGREGA TUS DATOS DE CONTACTO",
          text: 'Debes ingregar tus datos de contacto para confirmar la orden con exito',
          html: `
            <label for="nombre">Nombre:</label>
            <input id="nombreUsusario" class="swal2-input">
            <label for="numero">Telefono:</label>
            <input id="numeroTelefono" class="swal2-input">
            <label for="sinpe">Añadir comprobante de pago:</label>
            <input type="file" name="sinpe" id="pagoSinpe" class="swal2">
          `,
          confirmButtonColor: '#d35400',
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById("nombreUsusario").value,
              document.getElementById("numeroTelefono").value,
              document.getElementById("pagoSinpe").value
            ];
          }
        });
        if (formValues) {
          Swal.fire(JSON.stringify(formValues));
        }

        
        /*
        Swal.fire({
          title: 'ORDEN ENVIADA CON EXITO',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        })
        datos.style.display = "none";
        iniciar.style.display = ""
        botonAgregar.style.display = "none"
        */
      }

    })
  });


  botonCancelar.addEventListener('click',function(){

    Swal.fire({
      title: '¿DESEAS CANCELAR LA ORDEN?',
      text: 'Una vez cancelada la orden, tus registros anteriores se perderan',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d35400',
      cancelButtonColor: '#d33',
      confirmButtonText: 'CONFIRMAR',
      cancelButtonText: 'CANCELAR',
      background: '#ffffff'
    }).then((result) => {
        
      if (result.isConfirmed) {
        Swal.fire({
          title: "Orden Cancelada",
          icon: 'error',
          timer: 2000,
          showConfirmButton: false,
        })
        datos.style.display = "none";
        iniciar.style.display = ""
        botonAgregar.style.display = "none"
      }

    })

  })


});


