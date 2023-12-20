import { product } from '../data/product.js';
import { formatCurrency } from './utils/money.js';
import { getSelectedFragrance, filterProducts } from './filter.js';

getSelectedFragrance();

// Objek untuk menyimpan kondisi filter

filterProducts();

// Fungsi untuk menampilkan produk yang sudah difilter
export function updateDisplayedProduct() {
  const filteredProducts = product.filter(filterProducts);
  let shopHTML = '';

  filteredProducts.forEach((product) => {
    shopHTML += `
    <div class="xl:w-60 bg-pm1 lg:w-2/5 p-4 m-1 rounded-xl w-full max-h-[345px] transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl hover:shadow-sec1">
      <a class="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${
          product.image
        }">
      </a>
      <div class="mt-4">
        <div class="flex items-center">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 mr-auto">${
            product.brand
          }</h3>
          ${product.scent
            .map(
              (scentPath) =>
                `<img class="w-8 rounded-full " src="${scentPath}" alt=""/>`
            )
            .join('')}
        </div>
        <h2 class="text-gray-900 title-font text-lg font-medium">${
          product.name
        }</h2>
        <div class="flex items-center">
          <img class="w-20 mr-1" src="image/ratings/rating-${
            product.rating.stars * 10
          }.png" alt="">
          <div class="text-sec1">${product.rating.count}</div>
        </div>
        <p class="mt-1">$${formatCurrency(product.priceCents)}</p>
      </div>
    </div>`;
  });

  document.querySelector('.js-shop').innerHTML = shopHTML;
}

updateDisplayedProduct();
