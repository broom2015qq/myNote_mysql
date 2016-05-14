/**
 * Created by sunny on 16/4/2.
 */
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

//构造函数
function User(opts) {
    this.name = opts.name;
    this.password = opts.password;
}
function Note(opts) {
    this.title = opts.title;
    this.author = opts.author;
    this.tag = opts.tag;
    this.content = opts.content;
    this.createTime = opts.createTime;
}

//将Schema发布为Model,名字为User,Note可以索引到
//exports.User = mongoose.model('User',userSchema);
//exports.Note = mongoose.model('Note',noteSchema);
exports.User = User;
exports.Note = Note;
