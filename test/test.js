{// let data = JSON.parse(`[{"id":"17897973731429472","timestamp":"2022-01-28T04:17:03+0000","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/272678690_1638972806494760_1820734063405140428_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=a-qYYPsBfbQAX86LmCT&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8CAziaUWyL0gIMjzBkdZ0-Qt1bX2URuWdcoOreRJMzlw&oe=62FCD810"}]`);

// let f = `[{"id":"17897973731429472","timestamp":"2022-01-28T04:17:03+0000","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/272678690_1638972806494760_1820734063405140428_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=a-qYYPsBfbQAX86LmCT&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8CAziaUWyL0gIMjzBkdZ0-Qt1bX2URuWdcoOreRJMzlw&oe=62FCD810"}]`;

// if(typeof data == 'string') data = JSON.parse(data);

// // console.log(data);

// new Promise((resolve, reject) => {
//     reject();
//     return;
//     console.log('selesai');
// }).catch(bla => console.log('ahaha'));
}

let ctn = document.getElementsByTagName('div')[0];

document.getElementsByTagName('button')[0].addEventListener('click', event => {
    event.preventDefault();
    alert('ditekan');
});