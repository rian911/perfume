import { product } from '../data/product.js'; // Import 'product' (singular)

document.addEventListener('DOMContentLoaded', function () {
  // Get the value of the 'id' parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Find the product with the matching ID from the product array
  const foundProduct = product.find((item) => item.id === productId);

  // Check if the product was found
  if (foundProduct) {
    // Update the HTML on the detail page with the product information
    document.getElementById('product-name').textContent = foundProduct.name;
    document.getElementById('product-image').src = foundProduct.image;
    document.getElementById('product-brand').textContent = foundProduct.brand;
    // Add similar lines for other product properties

    // You can also log the entire product data to the console if needed
    console.log('Product Data:', foundProduct);
  } else {
    // Handle the case where the product with the specified ID was not found
    console.error('Product not found with ID:', productId);
  }
});
