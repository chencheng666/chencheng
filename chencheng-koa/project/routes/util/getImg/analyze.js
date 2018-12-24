const cheerio = require('cheerio');
function findImg(dom, callback, cb) {
    let tasks = [];
    let $ = cheerio.load(dom);
    $('img').each(function(i, elem) {
        let imgSrc;
        if(!/noimg\./gi.test($(this).attr('src'))) {
            imgSrc = $(this).attr('src');
        } else {
            imgSrc = $(this).attr('data-original');
        }
        callback(imgSrc, i, (param) => {
            tasks.push(param);
            if(i == $('img').length -1) {
                cb(tasks);
            }
        });
    });
}
module.exports.findImg = findImg;