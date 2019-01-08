import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TesController } from './mycontroller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, TesController],
  providers: [AppService],
})
export class AppModule {}
