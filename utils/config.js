const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Mongoose = {
  url: 'mongodb://localhost:27017/test',
  connect(){
    mongoose.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
      if(err) {
        console.log('数据库连接失败');
        return;
      }
      console.log('数据库连接成功');
    });
  }
};
const Email = {
  config: {
    host: "smtp.qq.com",
    port: 587,
    auth: {
      user: '1968763315@qq.com',
      pass: 'deunjcquilqveafg'
    }
  },
  get transporter() {
    return nodemailer.createTransport(this.config);
  },
  get verify() {
    return Math.random().toString().substring(2,8);
  }
};
module.exports = {
  Mongoose,
  Email
};