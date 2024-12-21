document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById('wishlistContainer');
    const wishlistedProducts = JSON.parse(localStorage.getItem('wishlistedProducts')) || [];
  
    wishlistedProducts.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.title}" width="100">
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      wishlistContainer.innerHTML += productCard;
    });
  });
  
  function addToCart(productId) {
    fetch('https://fakestoreapi.com/products/' + productId)
      .then(response => response.json())
      .then(product => {
        let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        cartProducts.push(product);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      });
  }