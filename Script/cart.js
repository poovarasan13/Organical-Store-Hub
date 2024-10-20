
function displayOrders() {
  
    const orders = JSON.parse(sessionStorage.getItem('orders')) || [];

  
    console.log('Orders to display:', orders);


    if (orders.length === 0) {
        document.getElementById('order-list').innerHTML = '<p>No orders placed yet.</p>';
        return;
    }

    let totalPrice = 0;
    let orderListHtml = '<ul class="list-group">';


    orders.forEach((order, index) => {
        totalPrice += order.price;
        orderListHtml += `<li class="list-group-item d-flex justify-content-between align-items-center">
                            ${order.count} x ${order.name}
                            <span class="badge bg-primary rounded-pill">${order.price.toFixed(2)}</span>
                            <button class="btn btn-danger btn-sm ms-2" onclick="deleteOrder(${index})">Delete</button>
                          </li>`;
    });


    orderListHtml += `</ul>
                      <div class="mt-3">
                        <h4>Total Price: $${totalPrice.toFixed(2)}</h4>
                      </div>`;

    
    document.getElementById('order-list').innerHTML = orderListHtml;
}


function deleteOrders() {
    
    sessionStorage.removeItem('orders');
    
    displayOrders();
  
    alert('All orders have been deleted.');
}


function deleteOrder(orderIndex) {

    let orders = JSON.parse(sessionStorage.getItem('orders')) || [];
    
    orders.splice(orderIndex, 1);
    
    sessionStorage.setItem('orders', JSON.stringify(orders));

    displayOrders();
   
    alert('Order item has been deleted.');
}


function finalizeOrder(event) {
    event.preventDefault();

   
    const userName = document.getElementById('userName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const address = document.getElementById('address').value;


    const orders = JSON.parse(sessionStorage.getItem('orders')) || [];
    if (orders.length === 0) {
        alert('No orders to finalize.');
        return;
    }


    const orderDetails = {
        userName,
        mobileNumber,
        address,
        orders,
        totalPrice: orders.reduce((total, order) => total + order.price, 0)
    };

    sessionStorage.setItem('finalOrder', JSON.stringify(orderDetails));

  
    window.location.href = 'order.html';
}


document.getElementById('finalizeOrderForm').addEventListener('submit', finalizeOrder);


document.addEventListener('DOMContentLoaded', displayOrders);
