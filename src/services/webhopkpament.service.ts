import { Injectable } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { PreferenceGetData } from "mercadopago/dist/clients/preference/get/types";
import { Payment } from "mercadopago";


@Injectable()
export class WebhookPaymentService extends PaymentService {
    pay: Payment;

    constructor(){
        super();
        this.pay = new Payment(this.mercado_pago);
    }

    ListenHookPayment = async ({ data_id, type }: { data_id: string | any, type: string | any}) => {
        if (type === "payment") {
            try {
                const response = await this.pay.get({ id: data_id });
                console.log(response);
            }
            catch (err) {
                console.log(err);
            }
        }

        return { data_id, type }
    }
}