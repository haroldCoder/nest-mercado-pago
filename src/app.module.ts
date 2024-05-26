import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentService } from './services/payment.service';
import { PaymentController } from './controllers/payment.controller';
import { ConfigModule } from '@nestjs/config';
import { webhookController } from './controllers/webhook.controller';
import { WebhookPaymentService } from './services/webhopkpament.service';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  })],
  controllers: [AppController, PaymentController, webhookController],
  providers: [AppService, PaymentService, WebhookPaymentService],
})
export class AppModule {}
