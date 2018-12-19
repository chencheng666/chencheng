const cheerio = require('cheerio');
let tasks = [];
function findImg(dom, callback, cb) {
    let $ = cheerio.load(dom);
    $('img').each(function(i, elem) {
        let imgSrc = $(this).attr('src');
        callback(imgSrc, i, (param) => {
            tasks.push(param);
            if(i == $('img').length -1) {
                cb(tasks);
            }
        });
    });
}
module.exports.findImg = findImg;