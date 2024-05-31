// Slider functionality for home section
const homeSlides = document.querySelector('.slider .slides');
const homePrev = document.querySelector('.slider .prev');
const homeNext = document.querySelector('.slider .next');
let homeIndex = 0;

homeNext.addEventListener('click', () => {
    homeIndex = (homeIndex + 1) % homeSlides.children.length;
    updateHomeSlide();
});

homePrev.addEventListener('click', () => {
    homeIndex = (homeIndex - 1 + homeSlides.children.length) % homeSlides.children.length;
    updateHomeSlide();
});

function updateHomeSlide() {
    homeSlides.style.transform = `translateX(-${homeIndex * 100}%)`;
}

// Slider functionality for product section
const productSlides = document.querySelector('.product-slider .product-slides');
const productPrev = document.querySelector('.product-slider .prev');
const productNext = document.querySelector('.product-slider .next');
let productIndex = 0;

productNext.addEventListener('click', () => {
    productIndex = (productIndex + 1) % Math.ceil(productSlides.children.length / 3);
    updateProductSlide();
});

productPrev.addEventListener('click', () => {
    productIndex = (productIndex - 1 + Math.ceil(productSlides.children.length / 3)) % Math.ceil(productSlides.children.length / 3);
    updateProductSlide();
});

function updateProductSlide() {
    productSlides.style.transform = `translateX(-${productIndex * 100}%)`;
}
