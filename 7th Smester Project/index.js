const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});


// kklmvmklcm klm

function addToCart(itemId) {
    // Send an HTTP request to the server to add the item to the cart
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/cart", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Update the cart count on the page
        var cartCount = document.getElementById("cart-count");
        cartCount.innerHTML = xhr.responseText;
      }
    };
    xhr.send(JSON.stringify({ itemId: itemId }));
  }
  