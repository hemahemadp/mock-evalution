ocument.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cartContainer');
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
  
    let totalPrice = 0;
  
    cartProducts.forEach((product, index) => {
      totalPrice += product.price;
  
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.title}" width="100">
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
          <button onclick="removeFromCart(${index})">Remove from Cart</button>
        </div>
      `;
      cartContainer.innerHTML += productCard;
    });
  
    document.getElementById('totalPrice').querySelector('h3').textContent = Total Price: $${totalPrice};
  });
  
  function removeFromCart(index) {
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    cartProducts.splice(index, 1);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    window.location.reload();
  }
  
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (confirm("Are you sure to checkout?")) {
      setTimeout(() => {
        alert("Thanks for shopping!");
        localStorage.removeItem('cartProducts');
        window.location.reload();
      }, 2000);
    }
  });