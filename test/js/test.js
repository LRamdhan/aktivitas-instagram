// const token = document.cookie.split(' ').find(el => {
//     if(el.startsWith('kytok')) return el;
// }).replace('kytok=', '').replace(';', '');


// let data =  await fetch(`https://graph.instagram.com/me?fields=username,account_type,media_count&access_token=${token}`)
//         .then(async response => {
//             return await response.json().then(res => res);
//         })
//         .catch(res => console.log(`terjadi error : ${res}`));

// console.log(data);

let obj = JSON.parse('[{"id":"17920164473056337","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/259722221_2135443203277270_1420443969908663691_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=3c8-_fwH2X8AX9jnWrN&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9NnGJ4x0-7HK3KJghXp3DzfhU3Pm8gqPAXlLQ5ewRdyQ&oe=6301EBB9","timestamp":"2021-11-21T13:09:06+0000","media_url":"https://video.cdninstagram.com/v/t50.16885-16/10000000_454583329643884_4765435862243698384_n.mp4?_nc_cat=105&vs=270294441601801_770875799&_nc_vs=HBksFQAYJEdJQ1dtQUJzWGVMdGNKMEJBTkJtOFJpck9pSkNidlZCQUFBRhUAAsgBABUAGCRHRDZLZ0E4ejEyMDFWajRDQUZoQUZjUG10NHBUYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbi7829pK%2FPPxUCKAJDMywXQGKidsi0OVgYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEyODAuaWd0diJ9&_nc_ohc=SWvJ8upwC_cAX_FdQua&_nc_zt=28&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9BlRZ1vlZIffUvYSBahD2QmtF_IsMpHlH83ATYh39onA&oe=62FD1891&_nc_rid=a1baf61d7c"},{"id":"17932098874678066","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/245517265_580228853219112_3476467111855734361_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sy-iTzSY9o8AX9F1AjW&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_pfbSvMOuu1NXozNH0g3l3PmFw0Z-DC2bg8hbUzsvfKg&oe=63020F2B","timestamp":"2021-10-15T10:08:33+0000","media_url":"https://video.cdninstagram.com/v/t50.2886-16/245613692_923216385218482_1727798841026792727_n.mp4?_nc_cat=105&vs=17940868321619739_2771447375&_nc_vs=HBksFQAYJEdIekVvdzZ5RjdFUXFVY0RBQmZOdTBMa1gtb1hia1lMQUFBRhUAAsgBABUAGCRHSG1vbmc3UjBlZnE0WDhIQUVLQmpYTERXMzlUYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbq3qnpksrbPxUCKAJDMywXQE3AAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkIn0%3D&_nc_ohc=v7J27uK3r7YAX-l5-8E&_nc_zt=28&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_yTG6YDjEdTa_nG4lz2BuPuMGqnAp-h585AEqBxPVfJw&oe=62FD12ED&_nc_rid=4a3f68792e"},{"id":"17895286802350294","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/244184668_273289887850123_3399174993367821631_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lEluZMA6p4EAX8DVdhX&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_2rNCsXcPZkLAuic8GOAVLeXJEMPZT6ROP00Qz9iNK_A&oe=63017B38","timestamp":"2021-10-02T16:37:38+0000","media_url":"https://video.cdninstagram.com/v/t50.2886-16/244295694_862435641108211_6186466741799496051_n.mp4?_nc_cat=103&vs=17944647754572469_3537020752&_nc_vs=HBksFQAYJEdBNm9qdzd6cGdkeVlSQURBSE1wdW1fNXZ0cFZia1lMQUFBRhUAAsgBABUAGCRHQUo0a0E0Nk1lY0Q5X1FBQUNia3hjSTRYd2g0YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaQr4P5vqLRQBUCKAJDMywXQE3EOVgQYk4YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkIn0%3D&_nc_ohc=WhzX2atptzYAX_wH1V5&_nc_zt=28&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_xqx3WvBL7VlDoiu0u5eJpa1y_N91eBc6yo0wL3IMRzQ&oe=62FD19AB&_nc_rid=de8db5e4eb"},{"id":"17846922029563018","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/170516361_127470412728317_954488716613897426_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Wc8EbhwKP9MAX9rvWsH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-P2jK7D-d7juw91MCn1uFdugS6TtIb2-ITbRq7sUWH5w&oe=63022257","timestamp":"2021-04-09T09:04:08+0000","media_url":"https://video.cdninstagram.com/v/t50.16885-16/10000000_1117513678751190_8576593898972896926_n.mp4?_nc_cat=111&vs=18216413587031131_2566971804&_nc_vs=HBksFQAYJEdJQ1dtQURXaGRwdFgtZ0RBSjdlRDl1MUxnWjNidlZCQUFBRhUAAsgBABUAGCRHRDEtS0FwWUdGWDBLX29IQUpVSGNOWU1XcEJ2YnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACa24eTE4%2B7bQBUCKAJDMywXQFQRBiTdLxsYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5pZ3R2In0%3D&_nc_ohc=AkP-cEvKXzUAX-WCHs2&_nc_zt=28&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-Ygwl98vGIEzI1gjhn6ftIcogw3G7OQmgnt0pJy9SXsQ&oe=62FD2C84&_nc_rid=dcb021e48a"},{"id":"18152723455176158","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/166445552_506449654064485_6154821592467547602_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=1eraiANaAhYAX_5xwov&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9yu35koWVIXnh-SDWGSE7srtURwePM3QUhHi1HSoeAqw&oe=6300E3E6","timestamp":"2021-03-29T23:15:14+0000","media_url":"https://video.cdninstagram.com/v/t50.2886-16/166228077_101319762041036_6506167503356763121_n.mp4?_nc_cat=111&vs=17865301637379891_3549052030&_nc_vs=HBksFQAYJEdHMXc2QW5NMkd4WUpsd0FBUEVieFliZmpFcGFia1lMQUFBRhUAAsgBABUAGCRHSnowNEFrNlpxX0lKbE1EQUdIWWJFeXRHM3BEYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbmzufBtZm8PxUCKAJDMywXQC%2Fdsi0OVgQYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkIn0%3D&_nc_ohc=5QiQO1DCOM0AX_6Cer6&_nc_oc=AQl3ZUUQycfaAZxRObeD78930SGpuYE83Rmn3zPg2tr6Gn0IQ76eiInVHbHPz0KzeCI&_nc_zt=28&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_w6C1vB7KLW1FE12Xk-kVQ6fRBxlz07s2vMpIUiOB64A&oe=62FD2D18&_nc_rid=80015cce0f"},{"id":"17995006285287546","timestamp":"2020-01-27T03:36:28+0000","media_url":"https://scontent.cdninstagram.com/v/t51.2885-15/82894122_200055521139586_3164868728442980418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=bSOaV7ghPagAX83eFE5&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8GN5pY6HzlBhEd5PIrMvGKLv6CcSowNZpQ-GRuJfOb7g&oe=6301D820"}]');
console.log(obj);

let posting = `<li>
            <img src="" style="width: 300px;">
            <br>
            waktu : <span class="waktu"></span>
            <br>
            <button data-id="" class="tbl-detail">detail</button>
        </li>`;

let createPost = (src, time, id) => {
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
    button.class = 'tbl-detail';
    button.textContent = 'detail';

    // perangkaian
    li.appendChild(img);
    li.appendChild(br1);
    li.appendChild(span);
    li.appendChild(br2);
    li.appendChild(button);

    return li;
}

let liEl = createPost('https://scontent.cdninstagram.com/v/t51.29350-15/170516361_127470412728317_954488716613897426_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Wc8EbhwKP9MAX9rvWsH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-P2jK7D-d7juw91MCn1uFdugS6TtIb2-ITbRq7sUWH5w&oe=63022257', '2021-11-21T13:09:06+0000', '17920164473056337');

document.body.appendChild(liEl);