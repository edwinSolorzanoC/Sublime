

document.addEventListener('DOMContentLoaded', function() {
  
  
  var botonIniciar = document.getElementById('iniciar');
  var botonAgregar = document.getElementById('agregar');
  var botonFinalizar = document.getElementById('finalizar');
  
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
              cancelButtonText: 'CANCELAR',
              cancelButtonColor: '#d33',
              confirmButtonColor: '#d35400',
              inputValidator: (value) => {
                if (!value) {
                  return '¡Necesitas escribir algo!';
                }
              }
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(`Detalle agregado: ${result.value}`);
              }
            });
      }
    });

  });

  botonIniciar.addEventListener('click', function(){
      Swal.fire({
          title: '¿Deseas iniciar a ordenar?',
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
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          datos.style.display = "none";
      }

      })
  });


  botonFinalizar.addEventListener('click', function(){
    Swal.fire({
      title: '¿Deseas Finalizar la orden ?',
      text: 'Una vez finalises la orden tus datos seran enviados a nuestro personal para iniciar a preparar tu pedido',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d35400',
      cancelButtonColor: '#d33',
      confirmButtonText: 'INICIAR',
      cancelButtonText: 'CANCELAR',
      background: '#ffffff'
    }).then((result) => {
        
      if (result.isConfirmed) {
        Swal.fire("Orden enviada con exito!");
        datos.style.display = "none";
      }

    })
  })


});


