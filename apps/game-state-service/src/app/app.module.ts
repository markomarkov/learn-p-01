import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

export class AppModule {
  constructor() {
    console.log('appModule');
  }
}