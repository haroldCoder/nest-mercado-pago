import { Injectable } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { PreferenceGetData } from "mercadopago/dist/clients/preference/get/types";


@Injectable()
export class WebhookPaymentService extends PaymentService{
    ListenHookPayment = async({data_id, type}: {data_id: string, type: string}) =>{
        if(type === "payment"){
            const response = await this.preferences.get({preferenceId: data_id});
            console.log(response);
            
        }

        return {data_id, type}
    }
}