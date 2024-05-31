document.addEventListener('DOMContentLoaded', function () {
  let btns = document.querySelectorAll('.btn-sm.boton1');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      let card = btn.closest('.card');

      let collapse = card.querySelector('.collapse');

      collapse.classList.toggle('show');
    });
  });
});

function desplegarDetalles(event) {
  event.preventDefault();
  const detailsContainer = event.target.parentElement.nextElementSibling;
  if (detailsContainer.style.display === "none") {
    detailsContainer.style.display = "block";
    event.target.innerText = "Ocultar detalles";
  } else {
    detailsContainer.style.display = "none";
    event.target.innerText = "Ver detalles";
  }
}
  
  function inscripcionEvento(nombreEvento) {
    window.location.href = 'formulario.html?evento=' + encodeURIComponent(nombreEvento);
  }

 document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const evento = urlParams.get('evento');
    if (evento) {
      document.getElementById('nombre-evento').textContent = evento;
      document.getElementById('nombre-evento-hidden').value = evento;
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    let resp = document.getElementById('respuesta');
  
    document.getElementById('formulario-inscripcion').addEventListener('submit', function (e) {
      e.preventDefault();
  
    let nombreEvento = document.getElementById('nombre-evento').textContent;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let documento = document.getElementById('documento').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;
    let fecha = document.getElementById('fecha').value;
    let interes1 = document.getElementById('interes1').checked ? "Sí" : "No";
    let interes2 = document.getElementById('interes2').checked ? "Sí" : "No";

    document.getElementById('nombreEventoResultado').innerText = 'Evento: ' + nombreEvento;
    document.getElementById('nombreResultado').innerText = 'Nombre: ' + nombre;
    document.getElementById('apellidoResultado').innerText = 'Apellido: ' + apellido;
    document.getElementById('documentoResultado').innerText = 'Documento: ' + documento;
    document.getElementById('emailResultado').innerText = 'Correo Electrónico: ' + email;
    document.getElementById('celularResultado').innerText = 'Celular: ' + celular;
    document.getElementById('fechaResultado').innerText = 'Fecha: ' + fecha;
    document.getElementById('interes1Resultado').innerText = 'Promociones exclusivas: ' + interes1;
    document.getElementById('interes2Resultado').innerText = 'Noticias y actualizaciones: ' + interes2;

    document.getElementById('successAlert').style.display = 'block';
      setTimeout(() => {
        document.getElementById('successAlert').style.display = 'none';
    }, 4000);
    });
});
