const nodemailer = require("nodemailer");
require("dotenv").config();

console.log(process.env.EMAIL)
console.log(process.env.PASSWORD)

let transporter = nodemailer.createTransport({
    service:"smtp.gmail.com",
    auth:{
        type:'oauth2',
        clientId:"449345838971-inon3um85g047ofq6haqegpr8l54sf2p.apps.googleusercontent.com",
        clientSecret:"d-p8_eHxYuGJkL3BtM-Sehq8"
    }
});


let mailOptions = {
    from:process.env.EMAIL,
    to:"meseque.teixeira@gmail.com",
    subject:"test",
    text:"Oi"
};


transporter.sendMail(mailOptions,(err,data) =>{
    if(err){
        console.log(err)
    }else{
        console.log("enviado com sucesso")
    }

})
