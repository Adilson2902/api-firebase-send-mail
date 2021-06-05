import { sendEmailControler } from './config/emailsfunctions';
import { Request , Response, Router} from 'express'


const routes = Router();




routes.get(("/"),(req:Request,res:Response) =>{
    res.send("Api Email Firebase")
})



routes.post(("/sendemail"),(req:Request,res:Response) =>{
   try {
       
       sendEmailControler.handle(req,res)
   } catch (error) {
       console.log(error)
   }
})

export default routes;