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

function showInIndex() {

      if (localStorage.length !== 0) {
      // Crea un div con el nombre informacion
    var nuevoDiv = document.createElement("div"); 
    nuevoDiv.id = 'informacion';

    // añade el elemento creado y su contenido al DOM 
    document.body.appendChild(nuevoDiv); 

    // Título del bloque
    informacion.innerHTML = "<h1>Ejercicio 4.4 - Jóvenes a Programar</h1>" + "<hr>" + "<h2>Resultados:</h2>";

    // Numero de enlaces de la pagina
    var enlace = document.getElementsByTagName("a");
    informacion.innerHTML = informacion.innerHTML + "<strong>Numero de enlaces: </strong>" + enlace.length + "<br/>";

    // Direccion del penultimo enlace
    var direccion = enlace[0].href;
    informacion.innerHTML = informacion.innerHTML + "<strong>Dirección del penúltimo enlace: </strong>" + direccion + "<br/>";

    // Numero de enlaces que apuntan a http://prueba
    let numEnlaces = 0;
    for(var i=0; i<enlace.length; i++) {
        if(enlace[i].href == "http://prueba/") {
        numEnlaces++;
        }
    }
    informacion.innerHTML = informacion.innerHTML + "<strong>Numero de enlaces que apuntan a http://prueba/: </strong>" + numEnlaces + "<br/>";
     

    // Numero de enlaces del tercer párrafo
    var parrafo = parrafo3.getElementsByTagName("a");
    informacion.innerHTML = informacion.innerHTML + "<strong>Numero de enlaces en el tercer párrafo: </strong>" + parrafo.length + "<br/>";

}
}