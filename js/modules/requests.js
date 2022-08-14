// token dari cookie
const token = document.cookie.split(' ').find(el => {
    if(el.startsWith('kytok')) return el;
}).replace('kytok=', '').replace(';', '');

// patokan muat lebih
let after;

// menampilkan data user
let showUser = data => {
    // mengubah object data jadi array
    let user = [];
    for(let att in data) {user.push(data[att]);}
    // tambah ke element
    Array.from(document.getElementsByClassName('d-user')).forEach((el, ind) => el.textContent = user[ind]);
};

// request pengguna lalu masukan data ke local storage
await (() => {
    return fetch(`https://graph.instagram.com/me?fields=username,account_type,media_count&access_token=${token}`)
        .then(async response => {
            await response.json().then(res => {
                localStorage.setItem('userAI', JSON.stringify(res));
                showUser(res);
            });
        })
        .catch(res => console.log(`terjadi error : ${res}`));
})();

// request postingan lalu masukan data ke local storage
await (() => {
    return fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&limit=6`)
        .then(async response => {
            await response.json().then(res => {
                localStorage.setItem('dataPost', JSON.stringify(res.data));
                after = res.paging.cursors.after;
            });
        }).catch(res => console.log(`terjadi error : ${res}`));
    }
)();

// request detail postingan - 17920164473056337
let reqDetailPost = postId => {
    return fetch(`https://graph.instagram.com/${postId}?fields=media_url, thumbnail_url, caption, timestamp, permalink&access_token=IGQVJYM3lLbHBORUNkSHlWbFg5eTFkVy0tclFocUlFZAlYyUkM1N3BJTVJ0UGpXV3NMMC1TcjBiNnV0ZA1dJTnczcGtCRjFKcmNtcWx5V19hY0V4MDhUY1YwNHZAkQXliUjBaSzFBZAlhn`)
        .then(async response => {
            return await response.json().then(res => res);
        })
        .catch(response => console.log(`terjadi error : ${res}`));
};

// menampilkan detail
let showDetail = async postId => {
    let detailPost = await reqDetailPost(postId);
    console.log('siap menampilkan data');
};

// muat lebih
let reqAddPost = () => {
    return new Promise((resolve, reject) => resolve())
        .then(async () => {
            // request post tambahan
            let addPost = await fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&limit=6&after=${after}`)
                .then(async response => await response.json().then(res => res))
                .catch(response => console.log(`terjadi error : ${res}`));
            // perbarui after
            after = addPost.paging.cursors.after;
            // tambah ke localstorage
            addPost = JSON.stringify(addPost.data).replace('[', '');
            addPost = localStorage.dataPost.slice(0, localStorage.dataPost.length - 1) + ', ' + addPost;
            localStorage.setItem('dataPost', addPost);
        });
};

// contoh event pada setiap tombol detail
document.getElementById('detail').addEventListener('click', event => {
    event.preventDefault();
    showDetail(event.target.dataset['id']);
});

// event muat lebih
document.getElementById('muat-lebih').addEventListener('click', async event => {
    event.preventDefault();
    await reqAddPost();
    console.log('siap menampilkan muat lebih');
});