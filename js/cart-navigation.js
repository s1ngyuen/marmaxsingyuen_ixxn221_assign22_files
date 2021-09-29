var Title = document.getElementById("cart-title");
var Cart1 = document.getElementById("cart-page-1");
var Cart2 = document.getElementById("cart-page-2");
var Cart3 = document.getElementById("cart-page-3");

function Cart1Forward() {
    Cart1.style.display = "none";
    Cart2.style.display = "grid";
    Title.innerHTML = "YOUR DETAILS";
}

function Cart2Forward() {
    Cart2.style.display = "none";
    Cart3.style.display = "grid";
    Title.innerHTML = "ORDER RECIEVED";
}

function Cart2Back() {
    Cart1.style.display = "grid";
    Cart2.style.display = "none";
    Title.innerHTML = "YOUR CART";
}