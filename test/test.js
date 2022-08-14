let obj = JSON.parse('{"username":"luzi_rmdhn","account_type":"PERSONAL","media_count":12,"id":"4651289671637281"}');

let data = [];
for(el in obj) {data.push(obj[el]);}

console.log(data);

// let days = ['sunday', 'monday', 'teusday'];
// days.forEach((el, ind) => {
//     console.log(`${el} indexnya ${ind}`);
// });