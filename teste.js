const nodemailer = require("nodemailer");
const { google } = require("googleapis")

const CLIENT_ID = '449345838971-7buflun6tdtu5sqtr7josa68sscnsaip.apps.googleusercontent.com'
const CLIENT_SECRET = 'E36F5KatqnLlTNO324HUierI'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground/'
const REFRESH_TOKEN = '1//04qfEAMOHGXv1CgYIARAAGAQSNwF-L9IrY4vtxrDQDKFbmTk45a7OtqvVRJy2F2zDcXRfuATdryl0xWcV6Ux0FvYkJYxGVoRE1Xo'

require("dotenv").config();

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI)


oAuth2Client.setCredentials({refresh_token:process.env.REFRESH_TOKEN})


console.log(process.env.EMAIL)
console.log(process.env.PASSWORD)

async function sendEmail(){

    try {
        const acessToken =  await oAuth2Client.getAccessToken();
        console.log(acessToken)
        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                type:'OAUTH2',
                user:process.env.EMAIL,
                clientId:CLIENT_ID,
                clientSecret:CLIENT_SECRET,
                refreshToken:REFRESH_TOKEN,
                accessToken:acessToken
            }
        })
   
   
   
   const mailOptions = {
       from:process.env.EMAIL,
       to:"nunojraa3@gmail.com",
       subject:"test",
       text:"Oi, teste email pelo node enviado pra os 3"
   };
   
   
   transport.sendMail(mailOptions,(err,data) =>{
       if(err){
           console.log(err)
       }else{
           console.log("enviado com sucesso")
       }
   
   })
   
   } catch (error) {
       console.log(error)
   }


}

sendEmail()




