import './app/app.element';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

console.log('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: 'TestHost',
      port: 3000,
    },
  });
  
  await app.startAllMicroservices();
  await app.listen(3000);

  Logger.log(`Game state service is running on: ${await app.getUrl()}`);
}

void bootstrap();
