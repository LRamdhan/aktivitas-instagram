// token dari cookie
const token = document.cookie.split(' ').find(el => {
    if(el.startsWith('kytok')) return el;
}).replace('kytok=', '').replace(';', '');

// patokan muat lebih
let after;

// request pengguna lalu masukan data ke local storage
let reqUser = () => {
    return fetch(`https://graph.instagram.com/me?fields=username,account_type,media_count&access_token=${token}`)
        .then(async response => {
            return await response.json().then(res => {
                localStorage.setItem('userAI', JSON.stringify(res));
                return res;
            });
        })
        .catch(res => console.log(`terjadi error : ${res}`));
};

// request postingan lalu masukan data ke local storage
let reqPost = () => {
    return fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&limit=6`)
        .then(async response => {
            return await response.json().then(res => {
                const post = JSON.stringify(res.data);
                localStorage.setItem('dataPost', post);
                after = res.paging.cursors.after;
                return post
            });
        }).catch(res => console.log(`terjadi error : ${res}`));
};

// request detail postingan - 17920164473056337
let reqDetailPost = postId => {
    return fetch(`https://graph.instagram.com/${postId}?fields=media_url, thumbnail_url, caption, timestamp, permalink&access_token=${token}`)
        .then(response => response.json(res => res))
        .catch(response => console.log(`terjadi error : ${response}`));
};

// muat lebih
let reqMorePost = () => {
    return fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&limit=6&after=${after}`)
        .then(async response => await response.json().then(res => {
            if(!res.data.length) return false;
            // perbarui after
            after = res.paging.cursors.after;
            // tambah ke localstorage
            let addData = JSON.stringify(res.data).replace('[', '');
            addData = localStorage.dataPost.slice(0, localStorage.dataPost.length - 1) + ', ' + addData;
            localStorage.setItem('dataPost', addData);
            return res.data;
        }))
        .catch(response => console.log(`terjadi error : ${response}`));
};

export {token, reqUser, reqPost, after, reqDetailPost, reqMorePost};