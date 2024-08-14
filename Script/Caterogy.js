
let productCategory= getUrlParameter("id");


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

const n=`list`;
document.getElementById('name1').innerHTML=productCategory;
// document.getElementById('name1').innerHTML=n;


function displaySnacks() {
    const snacksList = document.getElementById(n);
       
    snacksList.innerHTML = '';

    ProductContent.forEach(product => {
        if (product.prd_category === 'snacks' || product.prd_category === 'sweets') {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col', 'my-2');

            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'card-design');
            cardDiv.addEventListener('click', () => MoveToView(product.prd_id));
            const imgElement = document.createElement('img');
            imgElement.classList.add('card-img-top');
            imgElement.src = product.prd_image; 
            imgElement.alt = product.prd_name;
           

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');

            const cardTitleDiv = document.createElement('div');
            cardTitleDiv.classList.add('card-title');
            cardTitleDiv.textContent = product.prd_name;

            const cardPriceDiv = document.createElement('p');
            cardPriceDiv.textContent = `Price: ${product.prd_price}`;

            // Append elements
            cardBodyDiv.appendChild(cardTitleDiv);
            cardBodyDiv.appendChild(cardPriceDiv);
            cardDiv.appendChild(imgElement);
            cardDiv.appendChild(cardBodyDiv);
            colDiv.appendChild(cardDiv);
            snacksList.appendChild(colDiv);
        }
    });
}
displaySnacks();
   
