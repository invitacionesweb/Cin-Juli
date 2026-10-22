
const scriptUrl = 'https://script.google.com/macros/s/AKfycbyfDb1F-TwEX6-ldB64r3b8uHwfZjAt7A1JX5KOibHIBIjyCjHId_W7Krralf8ZTZ21Ww/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
    .then(res => {
      if (!res.ok) throw new Error('Error de red');
      Swal.fire('¡MUCHAS GRACIAS!', 'Formulario enviado', 'success');
    })
    .then(() => setTimeout(() => location.reload(), 1500))
    .catch(() =>
      Swal.fire('Error', 'No se pudo enviar el formulario', 'error')
    );
});
