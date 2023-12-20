import { updateDisplayedProduct } from './shop.js';

export const filters = {
  selectedFragrance: [],
  selectedBrand: '',
  selectedGender: 'all',
  // Tambahkan filter lainnya sesuai kebutuhan
};
export function getSelectedFragrance() {
  const selectedFragrance = Array.from(
    document.querySelectorAll('input[name="fragrance[]"]:checked')
  ).map((checkbox) => checkbox.value);

  return selectedFragrance;
}

// Fungsi untuk melakukan filter pada produk
export function filterProducts(prod) {
  const fragranceCondition =
    filters.selectedFragrance.length === 0 ||
    prod.type.some((fragrance) =>
      filters.selectedFragrance.includes(fragrance)
    );
  const genderCondition =
    filters.selectedGender === 'all' || prod.gender === filters.selectedGender;

  const brandCondition =
    filters.selectedBrand === '' || prod.brand === filters.selectedBrand;

  // Tambahkan filter lainnya sesuai kebutuhan
  // ...

  return fragranceCondition && genderCondition && brandCondition;
}

// Fungsi untuk mengupdate kondisi filter
function updateFilter(key, value) {
  filters[key] = value;
  updateDisplayedProduct();
}

const fragranceCheckboxes = document.querySelectorAll(
  'input[name="fragrance[]"]'
);
fragranceCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () =>
    updateFilter('selectedFragrance', getSelectedFragrance())
  );
});

const brandCheckboxes = document.querySelectorAll('input[name="brand[]"]');

brandCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    // Update the filter for selectedBrand
    updateFilter('selectedBrand', checkbox.checked ? checkbox.value : '');
  });
});

// Tambahkan event listener untuk radio button gender
const genderRadioButtons = document.querySelectorAll('input[name="gender"]');
genderRadioButtons.forEach((radio) => {
  radio.addEventListener('change', () =>
    updateFilter('selectedGender', radio.value)
  );
});
