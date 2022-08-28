// before dari accending date
let beforeAccDate;

// accending date
let accDate = async token => {
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
            if(!isThere && year == currentYear) return 'tidak ada postingan';
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
                if(resp.data.length == 0 && firstYear == currentYear) return rps[0];
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
};

accDate('token');
