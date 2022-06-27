const cheerio = require('cheerio');
const axios = require('axios');
const url = 'https://www.imdb.com/chart/top/?ref_=nv_mv_250';
let movies = [];
axios.get(url).then((res) => {
    //console.log(res.data);
    let $ = cheerio.load(res.data);
    $('.lister-list tr').each(function(el, index) {
        let url = $(this).find('td.titleColumn a').attr('href');
        let title = $(this).find('td.titleColumn a').text();
        let rating = $(this).find('td.imdbRating ').text().trim();

        movies.push({ title: title, rating: rating, url: url });

    });
    console.log(movies);
}).catch((err) => {
    console.log(err);
})