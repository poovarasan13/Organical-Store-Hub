
        function displayFinalOrder() {
            const orderDetails = JSON.parse(sessionStorage.getItem('finalOrder'));

            if (!orderDetails) {
                document.getElementById('order-details').innerHTML = '<p>No order details available.</p>';
                return;
            }

            const { userName, mobileNumber, address, orders, totalPrice } = orderDetails;

            let orderDetailsHtml = `<h3>Customer Details</h3>
                                    <p><strong>Name:</strong> ${userName}</p>
                                    <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                                    <p><strong>Address:</strong> ${address}</p>
                                    <h3 class="mt-4">Order Summary</h3>
                                    <ul class="list-group">`;

            orders.forEach(order => {
                orderDetailsHtml += `<li class="list-group-item d-flex justify-content-between align-items-center">
                                        ${order.count} x ${order.name}
                                        <span class="badge bg-primary rounded-pill">${order.price}</span>
                                      </li>`;
            });

            orderDetailsHtml += `</ul>
                                 <div class="mt-3">
                                   <h4>Total Price: ${totalPrice}</h4>
                                 </div>`;

            document.getElementById('order-details').innerHTML = orderDetailsHtml;
        }

       
        displayFinalOrder();

