import { Injectable } from "@nestjs/common";
import mercadopago, {Preference} from "mercadopago";
import { productType, return_order } from "src/types";

@Injectable()
export class PaymentService{
    protected mercado_pago : mercadopago;
    protected preferences: Preference
    
    constructor(){
        this.mercado_pago = new mercadopago({
            accessToken: process.env.ACCESS_TOKEN
        })
        this.preferences = new Preference(this.mercado_pago);
    }

    createPurchaseOrder = async(products : Array<productType>): Promise<return_order> =>{
        const response = await this.preferences.create({
            body: {
                items: products,
                // back_urls: {
                //     success: "http://localhost:3000/success",
                //     failure: "http://localhost:3000/failed",
                //     pending: "http://localhost:3000/pending"
                // },
                // auto_return: "approved",
                // notification_url: process.env.SECURE_URL_PAYMENT,
            }
        })
        const {items, init_point} = response;

        return {items, init_point};
    }
}