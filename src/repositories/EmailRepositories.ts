const nodemailer = require("nodemailer");
const { google } = require("googleapis")


require("dotenv").config();



export class EmailFuncionts{


async sendEmail(to:string,message:string,subject:string){
    const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI);
    var refresh_token ;
    oAuth2Client.setCredentials({refresh_token:process.env.REFRESH_TOKEN});
   await oAuth2Client.refreshAccessToken((error, tokens) => {
      refresh_token = tokens.refresh_token

      console.log(tokens)
    })

    oAuth2Client.setCredentials({refresh_token:refresh_token});

    try {
      const acessToken =  await oAuth2Client.getAccessToken();
      var response ;
      const transport = await nodemailer.createTransport({
          service:'gmail',
          auth:{
              type:'OAUTH2',
              user:process.env.EMAIL,
              clientId:process.env.CLIENT_ID,
              clientSecret:process.env.CLIENT_SECRET,
              refreshToken:process.env.REFRESH_TOKEN,
              accessToken:acessToken
          }
      })
 
 
 
        const mailOptions = {
            from:process.env.EMAIL,
            to:to,
            subject:subject,
            text:message
        };
        
        
      await  transport.sendMail(mailOptions,(err,data) =>{
            if(err){
                response = {
                  "type":"err",
                  err
                }
               
            }
            if(data){
               
              response ={
                "type":"sucess",
                "message":"E-mail enviado com sucesso"
              }
          
            }
        
        })

    

        return response;
        
 } catch (error) {
 return  response = error
 }

  }




}