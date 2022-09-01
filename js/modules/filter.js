// token
import {token} from './token.js';

// before dari accending date
let beforeAscDate;

// after dari desc time period
let afterDTP;

// before dari asc time period
let beforeATP;

// since until time period
let since, until;

// accending date
const ascDate = async () => {
    // mendapatkan tanggal
    let rangeDate;
    await (async () => {
        const currentYear = new Date().getFullYear(); 
        let rps;
        for(let year = 2013; year <= currentYear; year++) {
            let resp = await fetch(`https://graph.instagram.com/me/media?fields=timestamp&access_token=${token}&since=01-01-${year}&until=31-12-${year}`)
                .then(async response => await response.json().then(res => res))
                .catch(response => console.log(`terjadi error : ${response}`));
            const isThere = resp.data.length != 0; // kondisi lihat lagi !
            if(isThere) { 
                rps = resp.data; 
                break;
            }
            if(!isThere && year == currentYear) return [];
        }

        // jika data ada satu pada tahunnya
        if(rps.length == 1) {
            const firstYear = new Date(rps[rps.length - 1].timestamp).getFullYear() + 1;
            for(firstYear; firstYear <= currentYear; firstYear++) {  // kondisi lihat lagi !
                let resp = await fetch(`https://graph.instagram.com/me/media?fields=timestamp&access_token=${token}&limit=1&since=01-01-${firstYear}&until=31-12-${firstYear}`) // before lihat lagi !
                .then(async response => await response.json().then(res => res))
                .catch(response => console.log(`terjadi error : ${response}`));
                // data kedua ada
                if(resp.data.length != 0) {
                    rps.unshift(resp.data[resp.data.length - 1]);
                    break;
                };
                // data kedua tidak ada
                if(resp.data.length == 0 && firstYear == currentYear) return [rps[0]];
            }
        }

        // ambil tanggal data pertaama dan kedua
        rps = [rps[rps.length - 1], rps[rps.length - 2]];
        rps.forEach((el, ind) => {
            let range = new Date(el.timestamp);
            range = range.toLocaleDateString().split('/');
            let newTime = [];
            const date = (ind == rps.length -1) ? range[1] - 1 : range[1];
            newTime.push(date, range[0], range[2]);
            rps[ind].timestamp = newTime.join('-');
        });
        return {since: rps[0].timestamp, until: rps[1].timestamp};
    })().then(result => rangeDate = result);

    // jika data tidak atau data hanya ada satu
    if(Array.isArray(rangeDate)) return rangeDate;

    // mengambil before
    const rangeFirstPost = await fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&since=${rangeDate.since}&until=${rangeDate.until}`)
        .then(async response => await response.json().then(res => res))
        .catch(response => console.log(`terjadi error : ${response}`));
    let before = rangeFirstPost.paging.cursors.before;
    const firstPost = rangeFirstPost.data[0];

    // merequest data secara accending
    let postAcc = await fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&limit=5&before=${before}`)
        .then(async response => await response.json().then(res => res))
        .catch(response => console.log(`terjadi error : ${response}`));
    beforeAscDate = postAcc.paging.cursors.before
    postAcc = Array.from(postAcc.data);
    postAcc.push(firstPost);
    return postAcc.reverse();
};

// more ascDate
const moreAscDate = async () => {
    const morePost = await fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&limit=6&before=${beforeAscDate}`)
        .then(async response => await response.json().then(res => res))
        .catch(response => console.log(`terjadi error : ${response}`));
    if(morePost.data.length == 0) return []; 
    beforeAscDate = morePost.paging.cursors.before;
    return Array.from(morePost.data).reverse();
}

// desc time period
const descTimePeriod = async (sinc, unt) => {
    since = sinc;
    until = unt;
    const rangePost = await fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&since=${sinc}&until=${unt}&limit=4`)
        .then(async response => await response.json().then(res => res))
        .catch(response => console.log(`terjadi error : ${response}`));
    if(rangePost.data.length == 0) return rangePost.data;
    afterDTP = rangePost.paging.cursors.after;
    return rangePost.data;
};

// more desc time period
const moreDescTimePeriod = async () => {
    const rangePost = await fetch(`https://graph.instagram.com/me/media?fields=id, thumbnail_url, timestamp, media_url&access_token=${token}&since=${since}&until=${until}&limit=4&after=${afterDTP}`)
    .then(async response => await response.json().then(res => res))
    .catch(response => console.log(`terjadi error : ${response}`));
    if(rangePost.data.length == 0) return rangePost.data;
    afterDTP = rangePost.paging.cursors.after;
    return rangePost.data;
}

// ascTimePeriod
const ascTimePeriod = async (sinc, unt) => {
    since = sinc;
    until = unt;
    let resp = await fetch(`https://graph.instagram.com/me/media?fields=timestamp&access_token=${token}&since=${sinc}&until=${unt}`)
        .then(async response => await response.json().then(res => res))
        .catch(response => console.log(`terjadi error : ${response}`));
    if(resp.data.length <= 1) return resp.data;

    sinc = new Date(resp.data[resp.data.length - 1].timestamp).getTime();
    sinc = new Date(sinc - 86400000).toLocaleDateString("en-US", {timeZone: "America/New_York"}).split('/');
    sinc.unshift(sinc[1]);
    sinc.splice(2, 1);
    sinc.forEach((el, ind) => (el.length == 1) ? sinc[ind] = '0' + el : null);
    sinc = sinc.join('-');

    unt = new Date(resp.data[resp.data.length - 2].timestamp).toLocaleDateString("en-US", {timeZone: "America/New_York"}).split('/');
    unt.unshift(unt[1]);
    unt.splice(2, 1);
    unt.forEach((el, ind) => (el.length == 1) ? unt[ind] = '0' + el : null);
    unt = unt.join('-');

    let firstRange = await fetch(`https://graph.instagram.com/me/media?fields=timestamp&access_token=${token}&since=${sinc}&until=${unt}`)
    .then(async response => await response.json().then(res => res))
    .catch(response => console.log(`terjadi error : ${response}`));
    let firstPost= firstRange.data[0];
    let before = firstRange.paging.cursors.before;

    let post = await fetch(`https://graph.instagram.com/me/media?fields=timestamp&access_token=${token}&since=${since}&until=${until}&limit=5&before=${before}`)
    .then(async response => await response.json().then(res => res))
    .catch(response => console.log(`terjadi error : ${response}`));
    beforeATP = post.paging.cursors.before;
    post.data.push(firstPost);
    return post.data.reverse();
};

// ascTimePeriod
const moreAscTimePeriod = async () => {
    const post = await fetch(`https://graph.instagram.com/me/media?fields=timestamp&access_token=${token}&since=${since}&until=${until}&limit=6&before=${beforeATP}`)
    .then(async response => await response.json().then(res => res))
    .catch(response => console.log(`terjadi error : ${response}`));
    if(post.data.length == 0) return post.data;
    beforeATP = post.paging.cursors.before;
    return post.data.reverse();
};

// pilihan type : CAROUSEL_ALBUM, VIDEO, IMAGE
const type = type => {
    const data = JSON.parse(localStorage.getItem('dataPost'));
    if(data.length == 0) return data;
    const filter = data.filter(el => {
        if(el.media_type == type) {
            return el;
        }
    })
    return filter;
};

export {ascDate, moreAscDate, descTimePeriod, moreDescTimePeriod, ascTimePeriod, moreAscTimePeriod, type};