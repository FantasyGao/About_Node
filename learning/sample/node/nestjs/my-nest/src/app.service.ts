import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
  post(): string {
    return JSON.stringify({message: 'hello'})
  }
}
