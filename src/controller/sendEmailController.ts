import { Response , Request } from 'express'
import { EmailFuncionts } from '../repositories/EmailRepositories';


export class sendEmailController{

    constructor(private sendEmail:EmailFuncionts){

    }

   async handle(req:Request,res:Response){

    try {
        const {to,message,subject} = req.body;

        var response;
    
    
        const resposta = await this.sendEmail.sendEmail(to,message,subject);
        
                console.log(resposta)

        response =  res.status(200).send(resposta)

        return response;
    } catch (error) {
        return   response = res.status(400).send(error)
    }
  
       
    

    }
}