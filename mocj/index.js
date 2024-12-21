document.getElementById("loadProductsBtn").addEventListener("click", loadProducts);

function loadProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => displayProducts(products));
}

function displayProducts(products) {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = ''; // Clear existing products

  products.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" width="100">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
      </div>
    `;
    productContainer.innerHTML += productCard;
  });
}

function addToWishlist(productId) {
  fetch('https://fakestoreapi.com/products/' + productId)
    .then(response => response.json())
    .then(product => {
      let wishlistedProducts = JSON.parse(localStorage.getItem('wishlistedProducts')) || [];
      wishlistedProducts.push(product);
      localStorage.setItem('wishlistedProducts', JSON.stringify(wishlistedProducts));
    });
}