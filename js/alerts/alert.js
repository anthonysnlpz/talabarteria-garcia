$('.alert_btn__enviar').click(() => {
  Swal.fire({
    title: '¡Contacto!',
    text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    customClass: {
      popup: 'swal_alert__enviar',
    },
    timer: 4000, // Tiempo en milisegundos (4 segundos en este ejemplo)
    timerProgressBar: true, // Muestra una barra de progreso
    showConfirmButton: true // Oculta el botón de confirmación
  });
});