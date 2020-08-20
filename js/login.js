//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//Si hay un usuario en localstorage, redirige al index y manda aviso de usuario ya conectado
document.addEventListener("DOMContentLoaded", function(e){
        if(localStorage.length !== 0){
                location.href="inicio";
                alert('Ya estás conectado');
              } else {}

});

//Almacena los valores de name y pw del form registro en localstorage y redirige al index.html
function store(){

        var name = document.getElementById('name');
        var pw = document.getElementById('pw');
    
        if(name.value.length == 0){
            alert('Por favor ingresa un email');
    
        }else if(pw.value.length == 0){
            alert('Por favor ingresa una contraseña');
    
        }else if(name.value.length == 0 && pw.value.length == 0){
            alert('Por favor ingresá un email y una contraseña');
    
        }else{
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);
            location.href="inicio";
            alert('Tu cuenta ha sido creada ¡Bienvenida a la tienda!');
        }
    }

/*Verifica que los datos ingresados en form login coincidan con los del registro en localstorage y redirige al index*/

        function check(){
        var storedName = localStorage.getItem('name');
        var storedPw = localStorage.getItem('pw');
    
        var userName = document.getElementById('userName');
        var userPw = document.getElementById('userPw');
    
        if(userName.value == storedName && userPw.value == storedPw){
                location.href="inicio";
                alert('Has iniciado sesión ¡Bienvenido de vuelta!');
            
        }else{
            alert('Usuario o contraseña incorrecta. Si no tenés cuenta, ¡créala ahora!');
        }
    }

/*Permite cambiar del div registro al div login presionando el texto que aparece debajo del form*/

function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}