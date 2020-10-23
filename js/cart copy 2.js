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
                        <input type="number" style="width:35%" value="` + artcilesInfo.count + `" min="0">
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

function changeIndividualSubtotal () {
//cambio los subtotales individuales y actualizo el subttotal
for(let i = 0; i < cartInfo.articles.length; i++){
    document.getElementsByTagName("input")[i].addEventListener("change", function(){     
        document.querySelectorAll(".productSubTotal")[i].innerHTML = (document.querySelectorAll(".productpriceUnit")[i].innerHTML * document.getElementsByTagName("input")[i].value);
        alert("its working");            
        });
    }
}

function changeShippingPrice () {
    //para calcular el precio de envío
    for(let i = 0; i < 3; i++){
        document.getElementsByName("carrito")[i].addEventListener("change", function(){
        
            if (document.getElementsByName("carrito")[i] == document.getElementsByName("carrito")[0]) {
                shippingValue = 0.15; 
                alert(shippingValue); 
            } 
            
            else if (document.getElementsByName("carrito")[i] == document.getElementsByName("carrito")[1]) {
                shippingValue = 0.07;
                alert(shippingValue); 
            } 
            
            else {
                shippingValue = 0.05;
                alert(shippingValue); 
            }
        });
    }
}



function changeTotalGlobal () {

}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cartInfo = resultObj.data;

            showArticles (cartInfo);
            changeIndividualSubtotal (cartInfo);
            changeShippingPrice (cartInfo);
            changeTotalGlobal (cartInfo);


}


});



});

