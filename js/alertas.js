
// Esperamos a que se cargue el DOM completamente
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos el botón por su id
    var botonIniciar = document.getElementById('iniciar');

    var botonAgregar = document.getElementById('agregar');
    // Añadimos el evento click al botón
    botonAgregar.addEventListener('click', function() {
      // Mostramos la alerta de confirmación con SweetAlert2
      Swal.fire({
        title: '¿Deseas Agregar este platillo a tu orden?',
        text: "",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d35400',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Añadir',
        cancelButtonText: 'Cancelar',
        background: '#ffffff'
      }).then((result) => {
        // Si el usuario confirma
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Agrega detalle',
                text: "Esto en caso de modificar algo del platillo seleccionado",
                input: 'text',
                inputPlaceholder: 'Añade descripcion aquí',
                showCancelButton: true,
                confirmButtonText: 'Enviar',
                cancelButtonText: 'Cancelar',
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
          // Aquí puedes hacer la acción, como enviar un formulario o hacer una petición al servidor.
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
            confirmButtonText: 'Añadir',
            cancelButtonText: 'Cancelar',
            background: '#ffffff'
        })
    });
  });
  