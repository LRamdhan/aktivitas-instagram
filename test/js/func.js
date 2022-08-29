// let time = new Date();
// time = time.toLocaleDateString();
// time = time.split('/');
// let newTime = [];
// newTime.push(time[1] - 1);
// newTime.push(time[0]);
// newTime.push(time[2]);
// time = newTime.join('-');

// console.log(time);
// console.log(newTime);

// for(const i = 1; i <= 20; i++) {
//     const a = i;
//     console.log(a);
// }

// const data = (async () => {
//     return 'katak-kata';
// })().then(res => console.log(res));
// console.log(data);

// let d = async function() {return 'datanya'};
// let c;
// await d().then(m => c = m);
// console.log(c);

// let data = [1, '2', 3];
// let f = data.forEach((el, ind) => {
//     if(el.length == 1) {
//        data[ind] = '0' + el;
//     }
// });
// console.log(data);

let tanggal = ['1', '25', '2020'];
tanggal.unshift(tanggal[1]);
tanggal.splice(2, 1);

console.log(tanggal);