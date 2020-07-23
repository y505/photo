
//用于操作相册或图片的模板、
const fs = require("fs");

/** 
 * @method 获取某个文件夹的内容
 * @param {String} dicName 被获取的文件名称或路径
 * @param {Function} cd 回调函数
*/
exports.getDirs = function(dirName,cd){
    //使用异步的方法
    fs.readdir(dirName,function(err,files){
        cd(err,files);
    })
}
