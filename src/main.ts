import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // 참조 : https://www.npmjs.com/package/express-handlebars
  app.engine('hbs', hbs.engine({ extname: '.hbs' }));
  app.setViewEngine('hbs');
  hbs.create().getPartials()
  await app.listen(3000);
}
bootstrap();
