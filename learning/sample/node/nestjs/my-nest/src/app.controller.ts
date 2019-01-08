import { Get, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
  @Post('/mypost')
  root1(): string {
    return this.appService.post();
  }
}
