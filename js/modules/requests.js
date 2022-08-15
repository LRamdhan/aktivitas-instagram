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

// menampilkan postingan
let showPost = data => {
    let tipe = typeof data == 'string';
    if(tipe) data = JSON.parse(data);
    let posting = '';
    Array.from(data).forEach(el => {
        posting += `<li>
            <img src="${(el.thumbnail_url) ? el.thumbnail_url : el.media_url}" style="width: 300px;">
            <br>
            waktu : <span class="waktu">${new Date(el.timestamp).toDateString()}</span>
            <br>
            <button data-id="${el.id}" class="tbl-detail">detail</button>
        </li>`;
    }); 
    if(tipe) {
        document.getElementById('post').innerHTML = posting;
        return;
    }
    document.getElementById('post').innerHTML += posting;
};

// menambah event pada setiap tombol detail
let addDetailEvent = () => {
    Array.from(document.getElementsByClassName('tbl-detail')).forEach(el => {    
        el.addEventListener('click', event => {
            event.preventDefault();
            reqDetailPost(event.target.dataset['id']).then(async response => {
                showDetail(await response.json().then(res => res));
            });
            tutup.parentElement.parentElement.classList.toggle('popup-hilang');
        });
    });
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
                const post = JSON.stringify(res.data);
                localStorage.setItem('dataPost', post);
                after = res.paging.cursors.after;
                showPost(post);
                addDetailEvent();
            });
        }).catch(res => console.log(`terjadi error : ${res}`));
    }
)();

// request detail postingan - 17920164473056337
let reqDetailPost = postId => {
    return fetch(`https://graph.instagram.com/${postId}?fields=media_url, thumbnail_url, caption, timestamp, permalink&access_token=${token}`)
        .catch(response => console.log(`terjadi error : ${response}`));
};

// menampilkan detail
const gambar = document.getElementById('gambar');
const caption = document.getElementById('caption');
const tanggal = document.getElementById('tanggal');
const link = document.getElementById('link');
let showDetail = data => {
    gambar.src = (data.thumbnail_url) ? data.thumbnail_url : data.media_url;
    caption.textContent = data.caption;
    tanggal.textContent = new Date(data.timestamp).toDateString();
    link.textContent = data.permalink;
};

// muat lebih
let reqMorePost = () => {
    return new Promise(async (resolve, reject) => {
        // request post tambahan
        let addPost = await fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&limit=6&after=${after}`)
            .then(async response => await response.json().then(res => res))
            .catch(response => console.log(`terjadi error : ${res}`));
        // perbarui after
        if(!addPost.data.length) {
            reject();
            return;
        }
        after = addPost.paging.cursors.after;
        resolve(addPost.data);
        // tambah ke localstorage
        addPost = JSON.stringify(addPost.data).replace('[', '');
        addPost = localStorage.dataPost.slice(0, localStorage.dataPost.length - 1) + ', ' + addPost;
        localStorage.setItem('dataPost', addPost);
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
    await reqMorePost().then(res => showPost(res)).catch(res => {});
    addDetailEvent();
});

