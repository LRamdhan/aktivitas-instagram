// token dari cookie
const token = document.cookie.split(' ').find(el => {
    if(el.startsWith('kytok')) return el;
}).replace('kytok=', '').replace(';', '');

let data = type('CAROUSEL_ALBfe');
console.log(data);  