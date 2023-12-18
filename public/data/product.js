export function getProduct(productId) {
  let matchingProduct;

  product.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

export function getTopProducts() {
  const sortedProducts = product
    .slice()
    .sort((a, b) => b.rating.count - a.rating.count);
  return sortedProducts.slice(0, 4);
}

export const product = [
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
    scent: ['image/icon-scent/coffe.png', 'image/icon-scent/Yellow flower.png'],
    brand: 'Gucci',
    type: ['floral', 'oriental', 'woody'],
  },
  {
    id: 'asdbsdfr',
    image: 'image/2.jpg',
    name: 'Lady Rose',
    rating: {
      stars: 4.5,
      count: 190,
    },
    priceCents: 2090,
    keyword: ['sweet', 'calm', 'florist'],
    desc: 'Graceful floral symphony capturing elegance and femininity. Delicate, timeless, enchanting.Graceful floral symphony capturing elegance and femininity. Delicate, timeless, enchanting.Graceful floral symphony capturing elegance and femininity. Delicate, timeless, enchanting.',
    scent: ['image/icon-scent/coffe.png', 'image/icon-scent/red flower.png'],
    brand: 'Dior',
    type: ['citrus', 'gourmand'],
  },
  {
    id: 'lonuakieas',
    image: 'image/3.jpg',
    name: 'Gold Liquid',
    rating: {
      stars: 5,
      count: 176,
    },
    priceCents: 5090,
    keyword: ['sweet', 'rich', 'sport'],
    desc: 'Opulent elixir with rich, radiant notes. Luxurious, captivating, a true essence of sophistication.',
    scent: [
      'image/icon-scent/red flower.png',
      'image/icon-scent/Yellow flower.png',
    ],
    brand: 'Channel',
    type: ['fresh', 'oriental', 'woody'],
  },
  {
    id: 'nvbhuhdke',
    image: 'image/4.jpg',
    name: 'Little piece of heaven',
    rating: {
      stars: 4.5,
      count: 7600,
    },
    priceCents: 1090,
    keyword: ['fresh', 'sweet', 'nature'],
    desc: 'Blissful fragrance embodying joy and serenity. Enchanting, soothing, uplifting experience.',
    scent: ['image/icon-scent/coffe.png', 'image/icon-scent/orange.png'],
    brand: 'Dior',
    type: ['gourmand', 'woody'],
  },
  {
    id: 'komahhfeppw',
    image: 'image/5.jpg',
    name: 'Night rose blossom',
    rating: {
      stars: 4.5,
      count: 760,
    },
    priceCents: 9090,
    keyword: ['sweet', 'rich', 'sport'],
    desc: 'Captivating scent of blooming roses under moonlight. Elegant, romantic, perfect for enchanted evenings.',
    scent: ['image/icon-scent/orange.png', 'image/icon-scent/red flower.png'],
    brand: 'Gucci',
    type: ['citrus', 'oriental', 'woody'],
  },
];
