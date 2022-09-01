import {fill, request, filter, statistic} from './modules/init.js';

// menambah event pada setiap tombol detail
let addDetailEvent = () => {
    Array.from(document.getElementsByClassName('tbl-detail')).forEach(el => {    
        el.addEventListener('click', async event => {
            event.preventDefault();
            fill.showDetail(await request.reqDetailPost(event.target.dataset['id']));
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
    fill.showPost(await request.reqMorePost());
    // fill.showPost(await filter.moreAscDate());
    addDetailEvent();
});

// request dan tampilkan user
(async () => {
    fill.showUser(await request.reqUser());
})();

// request dan tampilkan postingan
(async () => {
    fill.showPost(await request.reqPost());
    // fill.showPost(await filter.ascDate());
    addDetailEvent();
})();