const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');
const iconv = require('iconv-lite'); //引入解码模块

function start(url, cb) {
    return new Promise((resolve, reject) => {
        let opt = { 
            url: url,
            encoding: null, 
            gzip: true // 请求不压缩文件
        }
        try {
            request(opt, function(err, res, body) {
                console.log(body, 'body');
                if(!err && res) {
                    let bodyBuf = iconv.decode(body, 'gb2312'); //解码gb2312 防止中文乱码
                    analyze.findImg(bodyBuf, downLoad, function(tasks) {
                        resolve(tasks);
                    });
                } else {
                    reject(err);
                }
            })
        } catch (err) {
            reject(err);
        }
    })
}

function downLoad(imgUrl, i, cb) {
    if(imgUrl) {
        let ext = imgUrl.split('.').pop();
        let reqOpt = {
            url: imgUrl,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
                'Referer': 'http://www.mzitu.com/'  // 防盗链
            }
        }
        let saveImg = request(reqOpt).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
            'encoding': 'utf8'
        }))
        saveImg.on('close', () => {
            cb({
                path: __dirname + path.join(config.imgDir, i + '.' + ext),
                originPath: imgUrl,
                publicPath: path.join('/images/crawler/' + i + '.' + ext)
            });
        })
    }
}
module.exports.start = start;