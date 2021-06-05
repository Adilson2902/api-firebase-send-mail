import { Request , Response, Router} from 'express'


const routes = Router();




routes.get(("/"),(req:Request,res:Response) =>{
    res.send("Api Email Firebase")
})


export default routes;