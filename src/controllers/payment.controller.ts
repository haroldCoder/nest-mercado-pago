import { Bind, Controller, Get, Post, Response } from "@nestjs/common";
import { PaymentService } from "src/services/payment.service";
import express from "express";
import { productType } from "src/types";


@Controller()
export class PaymentController{
    constructor(private readonly paymentservice: PaymentService){}

    @Post("api/v1/payment/order-create")
    @Bind(Response())
    async Create_payment(res: express.Response){
        const arrayProducts: Array<productType> = [
            {
                title: "Asus RTX 3050",
                unit_price: 5000,
                currency_id: "COP",
                quantity: 1,
                id: "Asus RTX 3050"
            },
            {
                title: "Mouse Gaming Logitec",
                unit_price: 2000,
                currency_id: "COP",
                quantity: 1,
                id: "Mouse Gaming Logitec"
            }
        ];

        const response = await this.paymentservice.createPurchaseOrder(arrayProducts);
        console.log(response);
        
        res.status(200).json(response);
    }
}