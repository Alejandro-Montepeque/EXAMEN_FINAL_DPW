import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import Swal from 'sweetalert2';

// Mostrar la alerta al cargar la página
if (document.querySelector('h2')?.textContent.includes('Calculadora Básica')) {
  Swal.fire({
    title: '¡Bienvenido a mi calculadora web!',
    text: 'Ingresa los números que deseas operar y luego selecciona la operación a realizar.',
    icon: 'info',
    confirmButtonText: 'Entendido'
  });
}


 // Se hace una petición para obtener el archivo 'navbarComponent.html'y donde se encuentra ubicado
    fetch('/components/navbarComponent.html')
        // Cuando la respuesta llega, se convierte a texto (el contenido HTML)
        .then(response => response.text())
        // Con el contenido HTML recibido, se inserta dentro del elemento con id 'navbar-container'
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
        })
        //Al haber un error muestra en la consola esto
        .catch(error => console.error('No se encuentra o no esta disponible el navbar', error))