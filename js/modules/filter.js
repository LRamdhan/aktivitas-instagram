// before dari accending date
let beforeAccDate;

// accending date
let accDate = async token => {
    // mendapatkan tanggal
    const rangeDate = (async () => {
        const currentYear = new Date().getFullYear(); 
        let rps;
        for(let year = 2013; year <= currentYear; year++) {
            let resp = await fetch(`https://graph.instagram.com/me/media?fields=timestamp&access_token=${token}&since=01-01-${year}&until=31-12-${year}`)
                .then(response => await response.json().then(res => res))
                .catch(response => console.log(`terjadi error : ${response}`));
            let isThere = resp.result.length != 0 // kondisi lihat lagi !
            if(isThere) { 
                rps = resp; 
                break;
            }
            if(!isThere && year == currentYear) return 'tidak ada media';
        }

        // jika data ada satu pada tahunnya
        const firstYear = new Date(rps.result[rps.length - 1].timestamp).getFullYear();
        // const beforeFirst = rps.result.pagination.cursors.before;
        let secondPost, resLength;
        for(let year = firstYear; year <= currentYear; year++) {  // kondisi lihat lagi !
            let resp = await fetch(`https://graph.instagram.com/me/media?fields=timestamp&access_token=${token}&limit=1&since=01-01-${year}&until=31-12-${year}`) // before lihat lagi !
            .then(response => await response.json().then(res => res))
            .catch(response => console.log(`terjadi error : ${response}`));
            if(resp.result.length != 0) {
                secondPost = resp.result[resp.result.length - 1];
                break;
            };
            if(resp.result.length == 0 && year == currentYear) return rps.result[rps];
        }
        // data kedua ada
        if(resLength) rps.result[1].timestamp = secondPost.result[0].timestamp; // kondisi lihat lagi !
        // data kedua tidak ada
        if(!resLength) return rps.result[0]; // kondisi lihat lagi !

        // ambil tanggal data pertaama dan kedua
        if(!isEmpty && rps.result.length == 1) {
            for(let i = 0; i <= 1; i++) {
                const range = new Date(rps.result[i]);
                range = range.toLocaleDateString().split('/');
                let newTime = [];
                const date = (i == 0) ? range[1] - 1 : range[1];
                newTime.push(date, range[0], range[2]);
                rps.result[i].timestamp = newTime.join('-');
            }
            return {since: rps.result[0], until: rps.result[1]};
        }

        // jika postingan tidak ada
        if(isEmpty && year == currentYear) return 'tidak ada postingan'; 
    })();

};

// accDate();


let time = new Date();
