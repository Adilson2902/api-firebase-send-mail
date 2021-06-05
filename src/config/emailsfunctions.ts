import { EmailFuncionts } from "../repositories/EmailRepositories";
import {sendEmailController} from '../controller/sendEmailController'



const EmailFunciont = new EmailFuncionts();
const sendEmailControler = new sendEmailController(EmailFunciont);


export { sendEmailControler}