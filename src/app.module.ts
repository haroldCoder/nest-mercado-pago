import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentService } from './services/payment.service';
import { PaymentController } from './controllers/payment.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  })],
  controllers: [AppController, PaymentController],
  providers: [AppService, PaymentService],
})
export class AppModule {}
