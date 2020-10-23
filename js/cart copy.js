var cartInfo = {};
let subtotalFinal = 0;
let totalPrice = 0;
let shippingValue = 0;





//función para construir el carrito de compra con los elementos del json
function showArticles () {

            let htmlContentToAppend = "";

            for(let i = 0; i < cartInfo.articles.length; i++){
                let artcilesInfo = cartInfo.articles[i];
                let subtotal = (artcilesInfo.count * artcilesInfo.unitCost);

                htmlContentToAppend += 
                `
            <div class="container">
                <div class="row">
                        
                    <div class="col">
                        <img alt="" src="` + artcilesInfo.src + `" width="80" height="80">
                    </div>

                    <div class="col">
                        <p class="mb-1">` + artcilesInfo.name + `</p>
                    </div>

                    <div class="col">
                        <span>` + artcilesInfo.currency + `</span>
                        <span class="productpriceUnit">` + artcilesInfo.unitCost + `</span>
                    </div>

                    <div class="col">
                        <input type="number" " style="width:35%" value="` + artcilesInfo.count + `">
                    </div>

                    <div class="col">
                        <span class="currency">` + artcilesInfo.currency + `</span>
                        <span class="productSubTotal">` + subtotal + `</span>
                    </div>

                </div>
          
            </div>
            <hr class="my-3">
                `
        
                document.getElementById("cartContent").innerHTML = htmlContentToAppend;
                
    }
}

//esta función calcula el subtotal individual de cada artículo
function subtotalIndividual () {

    //aplico un for para recorrer todos los elementos del json. No utilizo ID para obtener los elementos. Uso otros selectores y coloco [i] para llamar a la cantidad específica. 
    
    for(let i = 0; i < cartInfo.articles.length; i++){
        document.getElementsByTagName("input")[i].addEventListener("change", function(){
            //calcula el valor del subtotal individual
            document.querySelectorAll(".productSubTotal")[i].innerHTML = (document.querySelectorAll(".productpriceUnit")[i].innerHTML * document.getElementsByTagName("input")[i].value);

            //Cambio el precio del subtotal individual con cada iteracción y el precio del subtotal global 
            let subtotalFinal = 0;
            for(let b= 0; b < cartInfo.articles.length; b++){
                individualPriceProduct = document.querySelectorAll(".productSubTotal")[b].innerHTML;
                //condición que establece que si el precio está en dólares, lo cambie a pesos en el subtotal
                if (document.querySelectorAll(".currency")[b].innerHTML == "USD") {
                    subtotalFinal += (individualPriceProduct * 40);
                } else {
                    subtotalFinal += (individualPriceProduct * 1);
                }
                //Agarra el elemento subtotal del HTML y le pone el valor dinámico del precio
                document.getElementById("subtotalGlobal").innerHTML = "UYU" + " " + subtotalFinal;
                   
                }

                //para calcular el precio de envío
                for(let i = 0; i < 3; i++){
                    document.getElementsByName("carrito")[i].addEventListener("change", function(){
                    
                        if (document.getElementsByName("carrito")[i] == document.getElementsByName("carrito")[0]) {
                            shippingValue = 0.15;  
                        } 
                        
                        else if (document.getElementsByName("carrito")[i] == document.getElementsByName("carrito")[1]) {
                            shippingValue = 0.07;
                        } 
                        
                        else {
                            shippingValue = 0.05;
                        }
                    });
            
                }   
                document.getElementById("shippingCost").innerHTML = "UYU" + " " + (shippingValue * subtotalFinal);

                //para calcular el valor final
                document.getElementById("totalGlobal").innerHTML = "UYU" + " " + (subtotalFinal +(shippingValue * subtotalFinal));
        });
           
        
    }
}


/*
//función para mostrar el subtotal y el precio de envío cuando la página se carga por primera vez. La repito para poder mostrar el total cuando cargue la página por primera vez nada más.
function totalGlobal (){ 
    //muestro el subtotal cuando carga la página
    let subtotalFinal = 0;
    let totalPrice = 0;
    for(let b= 0; b < cartInfo.articles.length; b++){
    individualPriceProduct = document.querySelectorAll(".productSubTotal")[b].innerHTML;
    
    if (document.querySelectorAll(".currency")[b].innerHTML == "USD") {
        subtotalFinal += (individualPriceProduct * 40);
    } else {
        subtotalFinal += (individualPriceProduct * 1);
    }

    //muestro el costo de envío cuando carga la página
    shippingValue = (0.05 * subtotalFinal);

    //muestro el total cuando carga la página
    totalPrice = (shippingValue + subtotalFinal);

  
        //muestro todos los totales
       document.getElementById("subtotalGlobal").innerHTML = "UYU" + " " + subtotalFinal;
       document.getElementById("shippingCost").innerHTML = "UYU" + " " + shippingValue;
       document.getElementById("totalGlobal").innerHTML = "UYU" + " " + totalPrice ;
       
    }
    
}
*/





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cartInfo = resultObj.data;

            showArticles (cartInfo);
            subtotalIndividual (cartInfo);

            totalGlobal (cartInfo);

}


});



});
