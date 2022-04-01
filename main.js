const btnCatalog = document.querySelectorAll('.btn-open-catalog-list');
const popupList = document.querySelectorAll('.catalog__list-modal');
const btnList = document.querySelectorAll('.list-border-btn');
for (let i = 0; i < btnCatalog.length; i++) {
    btnCatalog[i].onclick = function () {
        event.preventDefault();
        popupList[i].classList.toggle('catalog__list-modal-active');
        btnList[i].classList.toggle('list-border');
    };
};
const btnTile = document.querySelector('.btn-tile');
const catalogTile = document.querySelector('.catalog-product__items-main-2');
const catalogGrid = document.querySelector('.catalog-product__items');
btnTile.onclick = function () {
    catalogTile.classList.add('show-tile');
    catalogGrid.classList.add('no-show');
    btnTile.classList.add('btn-grid-bg');
    btnGrid.classList.remove('btn-grid-bg');
};
const btnGrid = document.querySelector('.btn-grid');
btnGrid.onclick = function () {
    catalogTile.classList.remove('show-tile');
    catalogGrid.classList.remove('no-show');
    btnGrid.classList.add('btn-grid-bg');
    btnTile.classList.remove('btn-grid-bg');
};
