var productInfo = {};
var productList = {};
var productPosition = [];
var productComments = [];

//función que muestra la galería de imágenes cuando es llamada en el json
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//función que almacena las posiciones de related products en una variable

function StoreProductinfo(array){
    for(let i = 0; i < array.length; i++){
        let srcPosition = array[i];
        productPosition.push(srcPosition);
}
        console.log(productPosition);
}



//función que almacena los comentarios y los muestra debajo del json de comentario
function saveComments(){

    //obtengo los values de los fields del formulario en HTML
    var comentario = document.getElementById('comentario');
    var nombreDeUsuario = document.getElementById('nombreDeUsuario');
    var calificacion = document.getElementById('calificacion');

    //almaceno en localStore los values
    localStorage.setItem('comentario', comentario.value);
    localStorage.setItem('nombreDeUsuario', nombreDeUsuario.value);
    localStorage.setItem('calificacion', calificacion.value);

    //obtengo los values almacenados en el localstorage
    var getComentario = localStorage.getItem('comentario');
    var getNombreDeUsuario = localStorage.getItem('nombreDeUsuario');
    var getCalificacion = localStorage.getItem('calificacion');
    var getFecha = new Date().toLocaleString();



        let score = "";//inicia el valor de las estrellas en cero
    
        for( let i = 0; i < getCalificacion; i++){//Pinta la puntuación dada x el user con estrellas
            score += `
                <i class="fa fa-star checked"></i>
                `;
            }
    
        for( let i = getCalificacion; i < 5; i++){//Pinta con estrellas el restante de la puntuación
        score += `
            <i class="far fa-star"></i>
            `;
            }

    //creo un div con el DOM en donde almaceno cada comentario que se genere
    var nuevoComentario = document.createElement("div");

    
    nuevoComentario.innerHTML = `
    <div>
    <div class="row">

        <div class="col-1">
            <img alt="" src="https://1.gravatar.com/avatar/dcf6bcac06c1011632d4a4466edd7371?s=80&amp;d=identicon&amp;r=G">
        </div>   

        <div class="col">
                <div class="d-flex w-100 justify-content-between">
                <span>`+ getNombreDeUsuario +` `+ score +`  </span>
        </div>

        <p class="mb-1">` + getComentario + `</p>
                    <small class="text-muted">` + getFecha + `</small>
                    <hr class="my-3">

    </div>
    </div>`;

    document.getElementById("comments-list").appendChild(nuevoComentario);

}

  


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productInfo = resultObj.data;

            let productInfoNameHTML  = document.getElementById("productInfoName");
            let productInfoDescriptionHTML = document.getElementById("productInfoDescription");
            let productInfoCurrencyHTML = document.getElementById("productInfoCurrency");
            let productInfoCostHTML = document.getElementById("productInfoCost");
            let productInfoCategoryHTML = document.getElementById("productInfoCategory");
            let productInfoSoldCountHTML = document.getElementById("productInfoSoldCount");
        
            productInfoNameHTML.innerHTML = productInfo.name;
            productInfoDescriptionHTML.innerHTML = productInfo.description;
            productInfoCurrencyHTML.innerHTML = productInfo.currency;
            productInfoCostHTML.innerHTML = productInfo.cost;
            productInfoCategoryHTML.innerHTML = productInfo.category;
            productInfoSoldCountHTML.innerHTML = productInfo.soldCount;

            //Obtengo y muestro las imagenes de product-info
            showImagesGallery(productInfo.images);

            //Obtengo y muestro los autos relacionados de product-info
            StoreProductinfo(productInfo.relatedProducts);
        }

//este bloque de código llama al json de todos los productos para seleccionar los related-prod

        getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){ 
            productList = resultObj.data;


            let htmlContentToAppend = "";
           
            //esta función recorre las posiciones de related products y pinta en pantalla.
            // sólo los productos en las posiciones almacenadas en productPosition. 
            
            for (var i = 0; i< productPosition.length; i++) {
            console.log(productList[productPosition[i]]);
 
            htmlContentToAppend += `<a href="product-info.html" class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100"  onclick="showSpinner()">
          
                    <img src="` + productList[productPosition[i]].imgSrc + `" alt="` + productList[productPosition[i]].description + `" class="img-thumbnail">
        
        
        
                    <h4 class="mb-1">`+ productList[productPosition[i]].name + ` ` + `-` + ` ` + productList[productPosition[i]].cost + ` ` + productList[productPosition[i]].currency + `</h4>
                
                    <small class="text-muted">` + productList[productPosition[i]].soldCount + ` artículos vendidos</small>

                    <p class="mb-1">` + productList[productPosition[i]].description + `</p>\
  
                </div>
            </div>
            </a>`;

             document.getElementById("products-list").innerHTML = htmlContentToAppend;
    
        }
    }
    });
});

//este bloque llama al json de los comentarios y los dibuja en el HTML
getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){ 
        productComments = resultObj.data;
        
       
        let htmlContentToAppend = "";

        for(let i = 0; i < productComments.length; i++){
        let comments = productComments[i];
        let score = "";//inicia el valor de las estrellas en cero
    
        for( let i = 0; i < comments.score; i++){//Pinta la puntuación dada x el user con estrellas
            score += `
                <i class="fa fa-star checked"></i>
                `;
            }
    
        for( let i = comments.score; i < 5; i++){//Pinta con estrellas el restante de la puntuación
        score += `
            <i class="far fa-star"></i>
            `;
            }
            
                    
        htmlContentToAppend += `
        <div>
            <div class="row">
                <div class="col-1">
                    <img alt="" src="https://1.gravatar.com/avatar/dcf6bcac06c1011632d4a4466edd7371?s=80&amp;d=identicon&amp;r=G">
                </div>

                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <span>` + comments.user + ` ` + score + `</span>
                    </div>

                    <p class="mb-1">` + comments.description + `</p>
                    <small class="text-muted">` + comments.dateTime + `</small>
                    <hr class="my-3">

                </div>

                </div>
            </div>
        </div>`

        document.getElementById("comments-list").innerHTML = htmlContentToAppend;
        }

    }
    });


});
