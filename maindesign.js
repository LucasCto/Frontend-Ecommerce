//Mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
// let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__chekout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(lastValue === 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }else{
        drawProductInModal();
    }
    
});

//Borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}
// Mostrar el navbar cuando presiono el menu de hamburgesa
const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});


  // Obtener el formulario y el campo de búsqueda
  const searchForm = document.querySelector('.search-form');
  const searchInput = searchForm.querySelector('input[type="text"]');

  // Manejar el envío del formulario
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    const query = searchInput.value; // Obtener el valor del campo de búsqueda
    // Aquí puedes realizar acciones adicionales, como redirigir a la página de resultados
    console.log(`Búsqueda realizada: ${query}`);
  });