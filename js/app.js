import * as obj from './modules/init.js';

// menambah event pada setiap tombol detail
let addDetailEvent = () => {
    Array.from(document.getElementsByClassName('tbl-detail')).forEach(el => {    
        el.addEventListener('click', async event => {
            event.preventDefault();
            obj.showDetail(await obj.reqDetailPost(event.target.dataset['id']));
            tutup.parentElement.parentElement.classList.toggle('popup-hilang');
        });
    });
};

// menutup popup
const tutup = document.getElementById('tutup');
let firstChild = tutup;
let detailChild = [];
while(firstChild.nextElementSibling) {
    detailChild.push(firstChild.nextElementSibling);
    firstChild = firstChild.nextElementSibling;
}
tutup.addEventListener('click', event => {
    event.preventDefault();
    event.target.parentElement.parentElement.classList.toggle('popup-hilang');
    detailChild.forEach(el => el.innerHTML = '');
});

// event muat lebih
document.getElementById('muat-lebih').addEventListener('click', async event => {
    event.preventDefault();
    obj.showPost(await obj.reqMorePost());
    // console.log(await obj.reqMorePost());
    addDetailEvent();
});

// request dan tampilkan user
(async () => {
    obj.showUser(await obj.reqUser());
})();

// request dan tampilkan postingan
(async () => {
    obj.showPost(await obj.reqPost());
    addDetailEvent();
})();