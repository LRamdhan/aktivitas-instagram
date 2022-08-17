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
    if(!data) return;
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