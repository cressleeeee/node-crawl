const rp = require('request-promise-native');

async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/1764796/${item.doubanId}`;

    const res = await rp(url);

    return res;
};

(async () =>{
    let movies = ''
})