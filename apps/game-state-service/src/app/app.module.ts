import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { servicesConfig } from './config/services.config';
import { GameLoopModule } from './services/game-loop/game-loop.module';
import { GameNumberModule } from './services/game-number/game-number.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [servicesConfig],
    }),
    EventEmitterModule.forRoot(),
    GameLoopModule,
    GameNumberModule,
  ],
})

export class AppModule {
  constructor() {
    console.log('appModule');
  }
}