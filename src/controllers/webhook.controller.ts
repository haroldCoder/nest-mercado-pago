import { Bind, Controller, Get, Request, Response } from "@nestjs/common";
import express from "express"
import { WebhookPaymentService } from "src/services/webhopkpament.service";

@Controller()
export class webhookController{
    constructor(private readonly webhook: WebhookPaymentService){}

    @Get("api/v1/webhook")
    @Bind(Request(), Response())
    async ListenPayment(req: express.Request, res: express.Response){
        res.status(200).json(await this.webhook.ListenHookPayment({data_id: req.query["data.id"], type: req.query.type}));
    }
}