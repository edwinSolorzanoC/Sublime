import Swal from 'sweetalert2';


const boton = document.getElementById('alertaFinalizarOrden');

// Agrega un listener para detectar el clic
boton.addEventListener('click', () => {
    // Aquí puedes poner la acción que deseas realizar
    Swal.fire({
        title: '¡Botón presionado!',
        text: 'Has presionado el botón correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
});