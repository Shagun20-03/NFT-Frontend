// Functions used to interface with the front-end

// Add the cards to the card container
// $("#card-container").ready(async function() {
//     var cards = await getAllProducts();

//     for (const index in cards) {
//         var card = cards[index];
//         $("#card-container").append(card);
//     }
// });
import {createNewProduct} from "./utils.mjs"
// Alert the user when they "bought" a product
$("#card-container").on("click", "#buy-btn", function () {
    alert("Thank you for adding product");
});

// Handle page changes to add-product.html
$("#add-product").on("click", function () {
    window.location.href = "add-product.html";
});

// Handle form submit for add-product.html
$("#product-form").submit(async function (form) {
    form.preventDefault();

    // const name = $("#productNameInput").val();
    // const Id = $("#productIdInput").val();
    // const img = $("#productImageInput").val();
    // const price = $("#productPriceInput").val();
    // //const category = $("#productCategoryInput").val();
    // const description = $("#productDescriptionInput").val();

    // const product = {
    //     "product_name": name,
    //     "product_id": Id,
    //     "file": img,
    //     "product_price": price,
    //     //"category": category,
    //     "product_desc": description
    // };

    const formElement = document.querySelector("#product-form");
    const formData = new FormData(formElement);
    console.log(formElement);
    // var form = $('#product-form').serialize();               
    // var formData = new FormData($(form)[1]);
    // console.log(form);
    console.log(formData);

    var result = await createNewProduct(formData);
    if (result) {
        console.log(result);
        //alert("Product has been added!");
        // window.location.href = "index.html";
    } else {
        alert("Failed to add product");
    }
});

// Fill update-form with values from original product
// $("#update-form").ready(async function() {
//     const id = window.location.href.split("?id=").pop();
//     var product = await getProduct(id);

//     $("#productNameInput").val(product.name);
//     $("#productIdInput").val(product.Id);
//     $("#productImageInput").val(product.image);
//     $("#productPriceInput").val(product.price);
//     //$("#productCategoryInput").val(product.category);
//     $("#productDescriptionInput").val(product.description);
// });

// Handle form submit for update-product.html
// $("#update-form").submit(async function(form) {
//     form.preventDefault();

//     const id = window.location.href.split("?id=").pop();
//     const name = $("#productNameInput").val();
//     const Id = $("#productIdInput").val();
//     const img = $("#productImageInput").val();
//     const price = $("#productPriceInput").val();
//     const category = $("#productCategoryInput").val();
//     const description = $("#productDescriptionInput").val();

//     const product = {
//         "name": name,
//         "Id": Id,
//         "image": img,
//         "price": price,
//         "category": category,
//         "description": description
//     };

//     var result = await updateProduct(id, product);

//     if (result) {
//         alert("Product has been updated!");
//         window.location.href = "index.html";
//     } else {
//         alert("Failed to update product");
//     }
// });

// Handle the creation of update-product url
$("#card-container").on("click", "#edit-btn", function () {
    // Get the id of the product
    var productID = $(this).parent().parent().parent().attr("id");
    var url = "update-product.html" + "?id=" + productID;
    window.location.href = url;
});