let productId = getUrlParameter("id");

function getUrlParameter(sParam) {
    const sPageURL = window.location.search.substring(1);
    const sURLVariables = sPageURL.split('&');
    let sParameterName;
    let i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }   
    return false;
}
let product = null;

for (let i = 0; i < ProductContent.length; i++) {
    if (productId == ProductContent[i].prd_id) {
        product = ProductContent[i];
        break; 
    }
}


console.log('Selected product:', product);

if (product) {
    document.getElementById('name').innerText = product.prd_name;
    document.getElementById('price').innerText =  product.prd_price; 
    document.getElementById('description').innerText = product.prd_description;
    document.getElementById('image').src = product.prd_image;
   if(product.prd_weight===1)
    document.getElementById('quantity').innerHTML = product.prd_weight +' Kg';
   else{
    document.getElementById('quantity').innerHTML = product.prd_weight +' gram';
   }
    console.log(product.prd_weight);    
} else {
    console.error('Product not found');
}


function increaseCount() {
    const countInput = document.getElementById('product-count');
    countInput.value = parseInt(countInput.value) + 1;
}

function decreaseCount() {
    const countInput = document.getElementById('product-count');
    if (parseInt(countInput.value) > 1) {
        countInput.value = parseInt(countInput.value) - 1;
    }
}


function placeOrder() {
    const countInput = document.getElementById('product-count');
    const productName = product.prd_name;
    const productPrice = parseFloat(product.prd_price); 
    const productCount = parseInt(countInput.value);

   
    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    console.log('Product Count:', productCount);

   
    let orders = JSON.parse(sessionStorage.getItem('orders')) || [];

    
    const existingOrderIndex = orders.findIndex(order => order.name === productName);
    if (existingOrderIndex !== -1) {
        orders[existingOrderIndex].count += productCount;
        orders[existingOrderIndex].price += productPrice * productCount;
    } else {
        orders.push({ name: productName, price: productPrice * productCount, count: productCount });
    }

    
    sessionStorage.setItem('orders', JSON.stringify(orders));

 
    console.log(`${productCount} x ${productName} has been added to your order.`);
    console.log('Current orders:', orders);

   
    alert(`${productCount} x ${productName} has been added to your order.`);
}


