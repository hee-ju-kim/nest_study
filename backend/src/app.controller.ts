import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get('hello')
  getHello(): string {
    console.log('asdfasdf')
    return 'Hello World!';
  }
}
