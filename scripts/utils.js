// Useful functions to have

// Function to talk to the server and return a bunch of products
// async function getAllProducts() {
//     var products = [];
//     var cards = [];
//     const errorMessage = "<p>We currently don't have any items in stock, but feel free to add your own product/s </p>";

//     await fetch('http://54.83.105.94/api/', {
//         method: 'GET',
//         mode: 'cors'
//     })
//         .then(response => response.json())
//         .then(data => products = data)
//         .catch(_ => cards.push(errorMessage));

//     if (products.length > 0 && cards.length < 1) {
//         for (const index in products) {
//             var product = products[index];

//             var productID = product.id;
//             var productName = product.name;
//             var productImage = product.image;
//             var productPrice = product.price;
//             var productCategory = product.category;
//             var productDescription = product.description;

//             var card = `
//             <div class="col-sm" id=${productID}>
//             <div class="card bg-dark" style="width: 18rem;">
//                 <img class="card-img-top" src=${productImage} alt="Product Image">
//                 <div class="card-body text-white">
//                 <h4 class="card-category">${productCategory}</h4>
//                     <h5 class="card-title">${productName}</h5>
//                     <p class="card-text">${productDescription}</p>
//                     <br />
//                     <p><strong>Price: $</strong> ${productPrice}</p>
//                 </div>
//                 <div class="card-footer bg-transparent text-center row">
//                     <button type="button" class="btn btn-outline-warning btn-sm col" id="buy-btn">Buy Product</button>
//                     <button type="button" class="btn btn-outline-warning btn-sm col offset-md-1" id="edit-btn">Edit Product</button>
//                 </div>
//             </div>
//         </div>
//             `;

//             cards.push(card);
//         }
//     } else if (products.length < 1 && cards.length < 1) {
//         cards.push(errorMessage);
//     }

//     return cards;
// }

const ip_addr = '54.83.105.94';

// Create a new product
async function createNewProduct(product) {
    var result = false;
    const formData = new FormData();
    for (const name in product) {
        formData.append(name, product[name]);
    }

    await fetch(`http://${ip_addr}/api/upload/`, {
        method: 'POST',
        body: formData
    })
        .then(_ => result = true)
        .catch(_ => result = false);
    return result;
}

// Update product
// async function updateProduct(id, product) {
//     var result = false;

//     // await fetch(`http://remotedevs.org:8080/api/product/update/${id}`, {
//     //     method: 'POST',
//     //     body: JSON.stringify(product),
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     }
//     // })
//     await fetch(`http://54.83.105.94/api/update/${id}`,{
//         method: 'POST',
//         body: JSON.stringify(product),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(_ => result = true)
//         .catch(_ => result = false);

//     return result;
// }

// Get a single product
async function getProduct(id) {
    var products = [];

    await fetch(`http://${ip_addr}/api/`, {
        method: 'GET',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => products = data)
        .catch(_ => { });

    if (products.length > 0) {
        for (const index in products) {
            var product = products[index];

            if (product.id == id) {
                console.log("Product match!");
                return {
                    "Id": product.Id,
                    "name": product.name,
                    "image": product.image,
                    "price": product.price,
                    "category": product.category,
                    "description": product.description
                };
            }
        }
    }

    return {};
}

