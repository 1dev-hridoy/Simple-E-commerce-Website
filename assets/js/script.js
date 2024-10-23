let allProducts = [];
let cart = [];

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
                <p class="text-gray-600 mb-2 flex-grow">${product.description.substring(0, 100)}...</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-blue-600">$${product.price}</span>
                    <button onclick="addToCart(${product.id})" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
                <button onclick="showProductDetails(${product.id})" class="mt-2 text-blue-600 hover:underline">View Details</button>
            </div>
        </div>
    `;
}

function showProductDetails(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        const modalContent = `
            <h2 class="text-2xl font-bold mb-4">${product.title}</h2>
            <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-64 object-cover mb-4 rounded">
            <p class="mb-4">${product.description}</p>
            <p class="text-xl font-bold text-blue-600 mb-2">$${product.price}</p>
            <p class="mb-2">Category: ${product.category}</p>
            <p class="mb-2">Brand: ${product.brand}</p>
            <p>Rating: ${product.rating}/5</p>
        `;
        document.getElementById('modalContent').innerHTML = modalContent;
        document.getElementById('productModal').classList.remove('hidden');
    }
}

function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');

    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.title} (x${item.quantity}) - $${item.price * item.quantity}</li>`;
        total += item.price * item.quantity;
        count += item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filteredProducts = allProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm) &&
        (category === '' || product.category === category)
    );

    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.innerHTML += productCard;
    });
}

function populateCategories(products) {
    const categories = [...new Set(products.map(p => p.category))];
    const categoryFilter = document.getElementById('categoryFilter');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

async function initializeApp() {
    allProducts = await fetchProducts();
    displayProducts(allProducts);
    populateCategories(allProducts);

    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('productModal').classList.add('hidden');
    });
    document.getElementById('cartButton').addEventListener('click', () => {
        document.getElementById('cartDropdown').classList.toggle('hidden');
    });
}

initializeApp();