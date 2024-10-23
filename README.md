# Simple E-commerce Website

## Overview

This project is a simple, single-page e-commerce website built using HTML, JavaScript, and Tailwind CSS. It demonstrates basic e-commerce functionality including product listing, searching, filtering, cart management, and a simulated checkout process.

## Screenshot

![E-commerce Website Screenshot](https://i.ibb.co.com/4t3ssRm/Screenshot-2024-10-23-163354.png)


## Features

- Responsive design that works on desktop and mobile browsers
- Product listing with dynamic loading from an API
- Search functionality to filter products by name
- Category filtering
- Shopping cart with add and remove functionality
- Persistent cart using local storage
- Product detail modal with quantity selection
- Simulated checkout process
- Animated SVG background for enhanced visual appeal
- Loading spinner while products are being fetched

## Technologies Used

- HTML5
- JavaScript (ES6+)
- Tailwind CSS for styling
- Font Awesome for icons
- Fetch API for data retrieval

## Setup and Usage

1. Clone this repository or download the HTML file.
2. Open the HTML file in a modern web browser.
3. The application will load automatically, fetching product data from the dummyjson.com API.

No additional setup or installation is required as this is a standalone HTML file with CDN-linked resources.

## How to Use

- Browse the product listing on the main page.
- Use the search bar to find specific products.
- Use the category dropdown to filter products by category.
- Click on a product to view more details and add it to your cart.
- Adjust the quantity in the product modal before adding to cart.
- View your cart by clicking the cart icon in the top right.
- Remove items from the cart using the trash icon.
- Click the "Checkout" button to simulate a purchase (currently just shows an alert).

## API Used

This project uses the [dummyjson.com](https://dummyjson.com) API to fetch product data. In a production environment, you would replace this with your actual product API.

## Limitations and Future Improvements

- This is a frontend-only implementation. In a real-world scenario, you would need a backend to handle data persistence, user authentication, and actual payment processing.
- The checkout process is simulated. Integration with a payment gateway would be necessary for a fully functional e-commerce site.
- Product images are placeholders. In a real application, you would use actual product images.
- There's no pagination for products. For a large catalog, you'd want to implement pagination or infinite scrolling.

## Contributing

Feel free to fork this project and submit pull requests with improvements or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).
