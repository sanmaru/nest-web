import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Render('index')
  @Get('/')
  root() {
    return { layout: 'main', message: 'Hello HBS' };
    // return { message: 'Hello HBS' }; layout 이 없을 경우 main.hbs 가 default layout 이 된다.
  }

  @Render('index')
  @Get('/left')
  left() {
    return { layout: 'left', message: 'Hello HBS' };
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
