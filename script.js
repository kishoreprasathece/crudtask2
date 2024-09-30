async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      const container = document.getElementById('data-container');
      container.innerHTML = '';  

      data.forEach(product => {
        container.innerHTML += `
        <div class="product">
            <h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}" width="100">
             <p id=title >Price: $${product.price}</p>
             <button>add to cart</button>
        </div>`;
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById('data-container').innerHTML = 'Failed to load data.';
    }
  }


  window.onload = function() {
    fetchData();
  };