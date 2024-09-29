async function getdata() {
    try {

        const searchTerm = document.getElementById('product-search').value.toLowerCase();


        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json(); 

        
        let filteredProducts = products;
        if (searchTerm === 'all'   ) {
         
            filteredProducts = products;
        } else {
      
            filteredProducts = products.filter(product => 
                product.title.toLowerCase().includes(searchTerm)
            );
        }

        const cartDiv = document.querySelector('.cart');
        cartDiv.innerHTML = ''; 

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                cartDiv.innerHTML += `
                    <div class="product">
                        <h3 id="title" >${product.title}</h3>
                        <p>Price: $${product.price}</p>
                        <img src="${product.image}" alt="${product.title}" width="50">
                    </div>
                `;
            });
        } else {
            cartDiv.innerHTML = '<p>No products found.</p>';
        }
    } catch (error) {
        console.error("Error getting data:", error);
    }
}


