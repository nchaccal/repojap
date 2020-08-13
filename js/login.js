//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
        if(localStorage.length !== 0){
                location.href="index.html";
                alert('Ya estás conectado');
              } else {}

});

function store(){

        var name = document.getElementById('name');
        var pw = document.getElementById('pw');
    
        if(name.value.length == 0){
            alert('Please fill in email');
    
        }else if(pw.value.length == 0){
            alert('Please fill in password');
    
        }else if(name.value.length == 0 && pw.value.length == 0){
            alert('Please fill in email and password');
    
        }else{
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);
            location.href="index.html";
            alert('Tu cuenta ha sido creada ¡Bienvenida a la tienda!');
        }
    }

        function check(){
        var storedName = localStorage.getItem('name');
        var storedPw = localStorage.getItem('pw');
    
        var userName = document.getElementById('userName');
        var userPw = document.getElementById('userPw');
    
        if(userName.value == storedName && userPw.value == storedPw){
                location.href="index.html";
                alert('Has iniciado sesión ¡Bienvenido de vuelta!');
            
        }else{
            alert('Usuario o contraseña incorrecta. Si no tenés cuenta, ¡créala ahora!');
        }
    }

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



        