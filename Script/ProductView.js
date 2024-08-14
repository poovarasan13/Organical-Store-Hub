
let productId = getUrlParameter("id");


function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }   
    return false;
}

var product=null;

for(let i=0;i<ProductContent.length;i++){
   
    if(productId == ProductContent[i].prd_id){
        product = ProductContent[i];
    }

}

console.log(product.prd_category);
document.getElementById('name').innerText=product.prd_name;
document.getElementById('price').innerText="Price: "+product.prd_price;
document.getElementById('description').innerText=product.prd_description;
// product.prd_image="./Images/Snacks/KidneyBeans_1.webp";
document.getElementById('image').src=product.prd_image;