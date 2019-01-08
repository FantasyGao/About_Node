import { Get, Controller, Post, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app1')
export class TesController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(req, res): string {
    return 'funck';
  }
  @Post('/relect')
  root1(
    @Request() req,
    @Response() res
  ) {
    console.log(req.body)
    res.json({a:1});
  }
}
