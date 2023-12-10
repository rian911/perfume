import { getTopProducts } from '../data/product.js';
import { formatCurrency } from './utils/money.js';

let productHTML = '';
const topProduct = getTopProducts();

topProduct.forEach((product) => {
  productHTML += `<div class="xl:w-1/4 md:w-1/2 p-4">
    <div class="bg-pm2 p-6 rounded-lg">
      <img
        class="h-40 rounded w-full object-cover object-center mb-6"
        src="${product.image}"
        alt="content"
      />
      <h3
        class="tracking-widest text-indigo-500 text-xs font-medium title-font"
      >
        $${formatCurrency(product.priceCents)}
      </h3>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
        ${product.name}
      </h2>
      <p class="leading-relaxed text-base line-clamp-3">
        ${product.desc}
      </p>
    </div>
  </div>`;
});

document.querySelector('.js-top-product').innerHTML = productHTML;
