const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const port = 8080;
const app = express();

const web_url = 'your website url you want to scrape';

axios(web_url)
    .then(response => {
        const html = response.data;
        const cheerio_load_html = cheerio.load(html);
        const article = [];
        cheerio_load_html('.(what you want to search of tag from the page)', html).each(function() {
            const title = cheerio_load_html(this).text();
            const more_info = cheerio_load_html(this).find('your web page sign like a').attr('href');
            article.push({
                title,
                more_info
            })
        })
        console.log(article);
    }).catch(err => console.log(err));

// app.listen(port, () => console.log('server listening on port : ' + port))