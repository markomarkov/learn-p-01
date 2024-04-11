import { Module } from '@nestjs/common';
import { MyLibNestService } from './my-lib-nest.service';

@Module({
  providers: [MyLibNestService],
  exports: [MyLibNestService],
})
export class MyLibNestModule {}
