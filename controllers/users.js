var  { Email } = require('../utils/config');
var  UserModel = require('../models/users');

var login = async  (req,res,next) => {
  let { username, password} = req.body;
  let result = await UserModel.findLogin({
    username,
    password
  })
  if(result){
    res.send({
      msg: '登陆成功',
      status: 0
    })
  }else {
    res.send({
      msg: '登陆失败',
      status: -1
    })
  }
};

var register = async  (req,res,next) => {
  let  {username, password, email, verify } = req.body;

  if ( email !== req.session.email || verify !== req.session.verify){
      res.send({
        msg: "验证码错误",
        status: -1,
      });
      return
  }

  var result = await UserModel.save({
    username,
    password,
    email,

  });
   if(result){
    res.send({
      msg: '注册成功',
      status: 0,
    })
  }else {
    res.send({
      msg: '此邮箱已注册',
      status: -2,
    })
  }
};

var verify = async  (req,res,next) => {
 var email = req.query.email;
  var verify = Email.verify;
  req.session.verify = verify;
  req.session.email = email;
  var mailOptions = {
    from: '法海也懂爱 1968763315@qq.com',
    to: email,
    subject: '法海...',
    text: `验证码${verify}`,
  };
   Email.transporter.sendMail(mailOptions, (err) => {
     if(err){
       res.send({
         msg: '验证码发送失败',
         status: -1,
       });
     }else{
         res.send({
           msg: '验证码发送成功',
           status: 0,

       });
     }
   });

};
//   let info = await Email.transporter.sendMail(mailOptions)
//   if(info){
//     res.send({
//       msg: '验证码发送成功',
//       status: 0
//     });
//   }else{
//     res.send({
//       msg: '验证码发送失败',
//       status: -1
//     });
//   }
// };





var logout = async  (req,res,next) => {

};
var getUser = async  (req,res,next) => {

};
var findPassword = async  (req,res,next) => {

};
module.exports = {
  login,
  register,
  verify,
  logout,
  getUser,
  findPassword
}