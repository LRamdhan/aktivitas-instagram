const token = document.cookie.split(' ').find(el => {
    if(el.startsWith('kytok')) return el;
}).replace('kytok=', '').replace(';', '');


let data =  await fetch(`https://graph.instagram.com/me?fields=username,account_type,media_count&access_token=${token}`)
        .then(async response => {
            return await response.json().then(res => res);
        })
        .catch(res => console.log(`terjadi error : ${res}`));

console.log(data);