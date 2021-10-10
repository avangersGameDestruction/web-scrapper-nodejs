# web scrapper nodejs
 simple web scrapper

this is the source code of a simple web scrapper coded on js with the nodejs extensions called : express, axios, cheerio
the install urls will be posted here under it this is a web scrapper for specific websites to find in a split second all information connected to the inputted information you gived it to scan for

axios : https://www.npmjs.com/package/axios
express : https://www.npmjs.com/package/express
cheerio : https://www.npmjs.com/package/cheerio

how to use 

fill in this section the specific website url
```js
const web_url = 'your website url you want to scrape';
```
here you put the tag where it need to look and scrape for

```js
cheerio_load_html('.(what you want to search of tag from the page)', html)

// example

// <a target="_self" href="/package/cheerio"><img src="https://static.npmjs.com/26de4581a89de8a6501ce9a3dbb06b85.svg" class="c9d94a14 dn"><h3 class="db7ee1ac fw6 f4 black-90 dib lh-solid ma0 no-underline hover-black">cheerio</h3></a>


cheerio_load_html('._self', html) // dot is important if not your app doesn't look specific for all places who have _self in it
```

then implement the page element of html 
```js
const more_info = cheerio_load_html(this).find('your web page sign like a').attr('href');

// example 
const more_info = cheerio_load_html(this).find('a').attr('href');

// the a is from <a target="_self" href="/package/cheerio">
```

start the application and enjoy the scrape
