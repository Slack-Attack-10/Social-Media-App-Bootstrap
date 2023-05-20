
  // if the navigation-component.html file is in the same directory as your HTML file, the path would be "./navigation-component.html" -->
  //  If the navigation-component.html file is in a parent directory, the path would be "../navigation-component.html" -->
  fetch('../components/navigation-component.html')
  .then(response => response.text())
  .then(data => {
  const navigationContainer = document.getElementById('navigation');
  navigationContainer.innerHTML = data;
  });


// Define some sample products
const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
    { name: "Product 4", price: 40 },
  ];
  
  // Function to display the products
  function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
      const productCard = `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      `;
      productList.insertAdjacentHTML("beforeend", productCard);
    });
  }
  
  // Display the products when the page loads
  window.addEventListener("load", displayProducts);


  