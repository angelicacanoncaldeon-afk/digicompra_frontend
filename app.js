function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "" || pass === "") {
    alert("Por favor complete todos los campos.");
    return;
  }

  alert("Inicio de sesión exitoso");
  window.location.href = "catalog.html";
}

function registerUser() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "" || pass === "") {
    alert("Por favor complete todos los campos.");
    return;
  }

  alert("Registro exitoso");
  window.location.href = "login.html";
}

function goToProduct() {
  window.location.href = "product.html";
}

function addToCart() {
  alert("Producto agregado al carrito");
  window.location.href = "cart.html";
}

function finalizeOrder() {
  alert("Pedido confirmado");
  window.location.href = "confirm.html";
}
