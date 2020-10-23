var cartInfo = {};
let subtotalFinal = 0;
let totalPrice = 0;
let shippingValue = 0;





//función para construir visualmente el carrito de compra con los elementos del json
function showArticles () {

            let htmlContentToAppend = "";

            for(let i = 0; i < cartInfo.articles.length; i++){
                let artcilesInfo = cartInfo.articles[i];
                let subtotal = (artcilesInfo.count * artcilesInfo.unitCost);

                htmlContentToAppend += 
                `
            <div class="container">
                <div class="row products">
                        
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
                        <input type="number" style="width:35%" value="` + artcilesInfo.count + `" min="0" onkeydown="return false">
                    </div>

                    <div class="col">
                        <span class="currency">` + artcilesInfo.currency + `</span>
                        <span class="productSubTotal">` + subtotal + `</span>
                    </div>

                    <div class="col">
                    <button type="button" class="btn btn-danger">Eliminar</button>
                    </div>

                </div>
          
            </div>
            <hr class="my-3">
                `
        
                document.getElementById("cartContent").innerHTML = htmlContentToAppend;
    }
    
}

//función para remover los productos del carrito. No terminada aún
function removeProducts () {

    for(let i = 0; i < cartInfo.articles.length; i++){

        document.getElementsByTagName("button")[i].addEventListener("click", function(){     
            document.querySelectorAll(".row.products")[i].remove();
            changeTotalGlobal () 

            });
        }

    }
    
//función para mostrar el modal con el método de pago
function showModal () {

        document.getElementById("paymentMethod").addEventListener("click", function(){     
            var btn = document.createElement("div");
            btn.innerHTML = `
            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Método de pago</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">


                        <ul class="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                        
                        <li class="nav-item">
		                <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
                        Tarjeta de Crédito</a></li>
                        
	                    <li class="nav-item">
		                <a class="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                        Paypal</a></li>

	                    <li class="nav-item">
		                <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
		                Transferencia</a></li>
                        </ul>

                        <div class="tab-content">

                            <div class="tab-pane fade show active" id="nav-tab-card">
                            <form role="form" id="myForm">
                            <div class="form-group">
                            <label for="username">Nombre del titular de la tarjeta</label>
                            <input type="text" class="form-control" name="username" placeholder="" required="">
                            </div> <!-- form-group.// -->

                            <div class="form-group">
                            <label for="cardNumber">Número de Tarjeta de Crédito</label>
                            <div class="input-group">
                            <input type="number" class="form-control" name="cardNumber" placeholder="" min="0" max="99999999" required="">
                            </div>
                            </div> <!-- form-group.// -->

                            <div class="row">
                            <div class="col-sm-8">
                            <div class="form-group">
                            <label><span class="hidden-xs">Fecha de Expiración</span> </label>
                            <div class="input-group">
                            <input type="number" class="form-control" placeholder="MM" name="" min="0" max="12" required="">
                            <input type="number" class="form-control" placeholder="YY" name="" min="2020" required="">
                            </div>
                            </div>
                            </div>
                            
                            <div class="col-sm-4">
                            <div class="form-group">
                            <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV</label>
                            <input type="number" class="form-control" required="" max="999">
                            </div> <!-- form-group.// -->
                            </div>
                            </div> <!-- row.// -->
                            
                            <input type="submit" value="Confirmar datos" class="subscribe btn btn-primary btn-block">




                            </form>
                            </div> <!-- tab-pane.// -->



                            <div class="tab-pane fade" id="nav-tab-paypal">
                            <p>Este botón dirigirá a una página ajena a eMercado.com</p>
                            <p>
                            <button type="button" class="btn btn-primary">Ingresá a Paypal</button>
                            </p>
                            <p><strong>Nota: </strong>Paypal es un método de pago que permite asociar una tarjeta de crédito para realizar transferencias en cualquier parte del mundo.</p>
                            </div>


                            <div class="tab-pane fade" id="nav-tab-bank">
                            <p>Datos para transferencia bancaria</p>
                            <dl class="param">
                            <dt>Banco</dt>
                            <dd> Banco Santander</dd>
                            </dl>
                            <dl class="param">
                            <dt>Número de cuenta: </dt>
                            <dd> 12345678912345</dd>
                            </dl>
                            <dl class="param">
                            <dt>Número de sucursal: </dt>
                            <dd> 123456789</dd>
                            </dl>
                            <p><strong>Nota:</strong> Al finalizar la compra, deberá realizar el deposito y/o transferencia bancaria en un plazo no mayor de 24 horas para que su compra sea procesada, de lo contrario, será dada de baja. </p>
                            </div> <!-- tab-pane.// -->

                        </div> <!-- tab-content .// -->
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>
            `;
            document.body.appendChild(btn);


            //función que carga un valor en el sessionstorage para luego ejecutar una función que muestre un mensaje    
            document.getElementById("myForm").addEventListener("submit", myFunction);
                function myFunction() {
                sessionStorage.setItem("key", "1");
            }
        });
    }

//funcion para cambiar el valor del subtotal de cada artículo individualmente
function changeIndividualSubtotal () {
//cambio los subtotales individuales y actualizo el subttotal
for(let i = 0; i < cartInfo.articles.length; i++){
    document.getElementsByTagName("input")[i].addEventListener("change", function(){     
        document.querySelectorAll(".productSubTotal")[i].innerHTML = (document.querySelectorAll(".productpriceUnit")[i].innerHTML * document.getElementsByTagName("input")[i].value);
        changeTotalGlobal ();            
        });
    }
}

function changeShippingPrice () {
    //para calcular el precio de envío
    for(let i = 0; i < 3; i++){
        document.getElementsByName("carrito")[i].addEventListener("click", function(){
        
            if (document.getElementsByName("carrito")[i] == document.getElementsByName("carrito")[0]) {
                shippingValue = 0.15; 
                changeTotalGlobal (); 
            } 
            
            else if (document.getElementsByName("carrito")[i] == document.getElementsByName("carrito")[1]) {
                shippingValue = 0.07;
                changeTotalGlobal (); 
            } 
            
            else {
                shippingValue = 0.05;
                changeTotalGlobal ();
            }
        });
    }
}



function changeTotalGlobal () {
    let subtotalFinal = 0;

            //esta parte cambia el precio del subtotal en el cuadro final
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

                //esta parte cambia el precio del costo de envío en el cuadro final
                document.getElementById("shippingCost").innerHTML = "UYU" + " " + Math.round(shippingValue * subtotalFinal);

                //esta parte cambia el precio total en el cuadro final
                document.getElementById("totalGlobal").innerHTML = "UYU" + " " + (subtotalFinal +(shippingValue * subtotalFinal));


}

function alertsSubmit() {
    //función que muestra la alerta de la tarjeta de crédito luego de recargar la página
    if (sessionStorage.length !== 0) {
        var alertCard = document.createElement("div");
            alertCard.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert" style="width:80%">
            <center><strong>¡Datos recibidos!</strong> Hemos recibido los datos de tu tarjeta de crédito. Ahora podés finalizar la compra</center>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            `;
        document.body.appendChild(alertCard);

      } 

        sessionStorage.removeItem("key");
    
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
            removeProducts (cartInfo);
            changeIndividualSubtotal (cartInfo);
            changeShippingPrice (cartInfo);
            changeTotalGlobal (cartInfo);
            showModal (cartInfo);
            alertsSubmit(cartInfo);

}


});





});

