const  { Email } = require('../utils/config');

const login = async  (req,res,next) => {

};
const register = async  (req,res,next) => {

};
const verify = async  (req,res,next) => {
  let email = req.query.email;

  let mailOptions = {
    from: '法海也懂爱 1968763315@qq.com',
    to: email,
    subject: '法海...',
    text: '验证码: ' + Email.verify,
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
           status: 0
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





const logout = async  (req,res,next) => {

};
const getUser = async  (req,res,next) => {

};
const findPassword = async  (req,res,next) => {

};
module.exports = {
  login,
  register,
  verify,
  logout,
  getUser,
  findPassword
}