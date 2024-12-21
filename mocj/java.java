<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cart</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Navbar -->
  <nav>
    <a href="index.html">Home</a>
    <a href="wishlist.html">Wishlist</a>
    <a href="cart.html">Cart</a>
  </nav>

  <h1>Your Cart</h1>

  <div id="cartContainer" class="product-container"></div>

  <div id="totalPrice">
    <h3>Total Price: $0</h3>
    <button id="checkoutBtn">Checkout</button>
  </div>

  <script src="js/cart.js"></script>
</body>
</html>