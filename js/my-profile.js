//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

          //Muestra el nombre de usuario en el campo correo electrónico de perfil
          document.getElementById("correoElectronico").value = localStorage.getItem('correoElectronico');
          //Muestra la contraseña en el campo contraseña del perfil
          document.getElementById("pw").value = localStorage.getItem('pw');

          //Muestro los nombres en el campo nombre del perfil
          document.getElementById("nombres").value = localStorage.getItem('nombres');

          //muestro los apellidos en el campo apellido del perfil
          document.getElementById("apellidos").value = localStorage.getItem('apellidos');

          //muestro la fecha de nacimiento en el campo fecha de nacimiento
          document.getElementById("fechaNacimiento").value = localStorage.getItem('fechaNacimiento');

          //muestro el número de teléfono en el campo número de teléfono
          document.getElementById("telefono").value = localStorage.getItem('telefono');


            //esta función modifica los datos de perfil
          document.getElementById("editarPerfil").addEventListener("submit", myFunction);
            function myFunction() {

          }

          (function() {
            'use strict';
            window.addEventListener('load', function() {
              // Fetch all the forms we want to apply custom Bootstrap validation styles to
              var forms = document.getElementsByClassName('needs-validation');
              // Loop over them and prevent submission
              var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener("submit", function(event) {
                    //cambiar los datos del localstorage si se modifican los datos
                    localStorage.setItem('correoElectronico', correoElectronico.value);
                    localStorage.setItem('pw', pw.value);
                    localStorage.setItem('nombres', nombres.value);
                    localStorage.setItem('apellidos', apellidos.value);
                    localStorage.setItem('fechaNacimiento', fechaNacimiento.value);
                    localStorage.setItem('telefono', telefono.value);
                    //creo una alerta para indicar que se modificaron los datos
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });
            }, false);
          })();

});