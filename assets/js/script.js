async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

function createProductCard(product) {
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-48 object-cover">
            <div class="p-4 flex-grow flex flex-col">
                <h2 class="text-xl font-semibold mb-2">${product.title}</h2>
                <p class="text-gray-600 mb-2 flex-grow">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-blue-600">$${product.price}</span>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

async function displayProducts() {
    const products = await fetchProducts();
    const productsContainer = document.getElementById('products');
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.innerHTML += productCard;
    });
}

displayProducts();