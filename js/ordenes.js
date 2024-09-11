

document.addEventListener('DOMContentLoaded', function() {
  
  
  var botonIniciar = document.getElementById('iniciar');
  var botonAgregar = document.getElementById('agregar');
  var botonFinalizar = document.getElementById('finalizar');
  var botonCancelar = document.getElementById('cancelar');

  botonAgregar.addEventListener('click', function() {
    
    Swal.fire({
      title: '¿Deseas Agregar este platillo a tu orden?',
      text: "",
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
              title: 'Agrega detalle',
              text: "Esto en caso de modificar algo del platillo seleccionado",
              input: 'text',
              inputPlaceholder: 'Añade descripcion aquí',
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
                  title: 'Platillo añadido a la orden',
                  timer: 1500,
                  position: "top-end",
                  icon: 'success',
                  showConfirmButton: false,
                  text: `Detalle agregado: ${result.value}`,
                })
                // Swal.fire(`Detalle agregado: ${result.value}`);
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                  title: 'Platillo añadido a la orden',
                  timer: 1500,
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

  botonIniciar.addEventListener('click', function(){
      Swal.fire({
          title: '¿Deseas iniciar tu orden?',
          text: "Empieza a crear tu orden",
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


  botonFinalizar.addEventListener('click', function(){
    Swal.fire({
      title: '¿Deseas Confirmar la orden ?',
      text: 'Una vez confirmada y finalizada la orden, tus datos seran enviados a nuestro personal, para iniciar a preparar tu pedido',
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
          title: 'ORDEN ENVIADA CON EXITO',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        })
        datos.style.display = "none";
        iniciar.style.display = ""
        botonAgregar.style.display = "none"
      }

    })
  });


  botonCancelar.addEventListener('click',function(){

    Swal.fire({
      title: '¿Deseas Cancelar la orden ?',
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
          icon: 'success',
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


