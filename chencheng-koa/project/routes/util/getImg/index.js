const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');

function start(url, cb) {
    return new Promise((resolve, reject) => {
        request(url, function(err, res, body) {
            if(!err && res) {
                analyze.findImg(body, downLoad, function(tasks) {
                    resolve(tasks);
                });
            } else {
                reject(err);
            }
        })
    })
}

function downLoad(imgUrl, i, cb) {
    let ext = imgUrl.split('.').pop();
    let saveImg = request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
        'encoding': 'utf8'
    }))
    saveImg.on('close', () => {
        cb({
            path: __dirname + path.join(config.imgDir, i + '.' + ext),
            originPath: imgUrl,
        });
    })
}
module.exports.start = start;