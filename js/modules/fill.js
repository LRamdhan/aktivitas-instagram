// menampilkan data user
let showUser = data => {
    // mengubah object data jadi array
    let user = [];
    for(let att in data) {user.push(data[att]);}
    // tambah ke element
    Array.from(document.getElementsByClassName('d-user')).forEach((el, ind) => el.textContent = user[ind]);
};

// buat element tampilan postingan
let createPostEl = (src, time, id) => {
    // li
    let li = document.createElement('li');

    // img
    let img = document.createElement('img');
    img.style = 'width: 300px;';
    img.src = src;

    // br
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');

    // span
    let span = document.createElement('span');
    span.class = 'waktu';
    span.textContent = new Date(time).toDateString();

    // button
    let button = document.createElement('button');
    button.setAttribute('data-id', id);
    button.classList.add('tbl-detail');
    button.textContent = 'detail';

    // perangkaian
    li.appendChild(img);
    li.appendChild(br1);
    li.appendChild(span);
    li.appendChild(br2);
    li.appendChild(button);

    return li;
}

// menampilkan postingan
let showPost = data => {
    if(!data) return;
    let tipe = typeof data == 'string';
    if(tipe) data = JSON.parse(data);
    let postParent = document.getElementById('post');
    Array.from(data).forEach(el => {
        let url = (el.thumbnail_url) ? el.thumbnail_url : el.media_url;
        postParent.appendChild(createPostEl(url, el.timestamp, el.id));
    }); 
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

export {showUser, showPost, showDetail};