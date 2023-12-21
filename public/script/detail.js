import { getProduct } from '../data/product.js';

let detail = JSON.parse(localStorage.getItem('detail'));

export function saveToDetail() {
  localStorage.setItem('detail', JSON.stringify(detail));
}

export function addtoDetail(productId) {
  const matchingItem = detail.find((item) => item.id === productId);

  if (!matchingItem) {
    detail.push({
      id: productId,
    });
  }
}

if (!detail) {
  detail = [
    {
      id: 'asodajknoa',
      image: 'image/1.jpg',
      name: 'Black Soldier',
      rating: {
        stars: 4.5,
        count: 76,
      },
      priceCents: 1090,
      keyword: ['sweet', 'rich', 'sport'],
      desc: 'Bold, mysterious blend of woody and oriental notes. Modern, confident, unforgettable.',
      scent: [
        'image/icon-scent/coffe.png',
        'image/icon-scent/Yellow flower.png',
      ],
      brand: 'Jo Malone',
      type: ['floral', 'oriental', 'woody'],
      gender: 'male',
    },
  ];
}

export function renderPageDetail() {
  let detailsumHTML = '';

  detail.forEach((detailItem) => {
    const productId = detailItem.id;

    const matchingProduct = getProduct(productId);

    detailsumHTML = `
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <!-- left bar -->
      <div class="flex">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="${matchingProduct.image}"
          />
        </div>
        <div class="icon flex flex-col justify-center items-center ml-4">
         
          ${matchingProduct.scent
            .map(
              (scentPath) =>
                `<img
            class="w-12 rounded-full mb-2"
            src="${scentPath}" alt=""/>`
            )
            .join('')}
        </div>
      </div>
      <!-- right bar -->
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900"
        >
          ${matchingProduct.name}
        </h1>
        <div class="flex items-center">
          <h3
            class="text-gray-500 text-xs tracking-widest title-font mb-1 mr-auto"
          >
            ${matchingProduct.brand}
          </h3>
        </div>
        <div class="flex items-center">
          <img class="w-20 mr-1" src="image/ratings/rating-${
            matchingProduct.rating.stars * 10
          }.png" alt="" />
          <div class="text-sec1">${matchingProduct.rating.count}</div>
        </div>
        <p class="text-sm mt-2 text-gray-500 mb-8 w-1/2">
          ${matchingProduct.desc}
        </p>
        <!-- card -->
        <div class="flex">
          <div class="product-quantity-container">
            <select
              class="bg-pm1 text-black border-sec1 border rounded-2xl px-5 py-2 m2"
            >
              <option selected value="1">1</option>
              <option class="tence" value="3">3</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="ml-4">
            <button
              class="add-to-cart-button button-primary bg-sec1 text-white px-4 py-2 rounded-2xl"
              data-product-id=""
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  });
  // console.log(detailsumHTML);
  // console.log(document.querySelector('.detail-main'));
  document.querySelector('.detail-main').innerHTML = detailsumHTML;
}
