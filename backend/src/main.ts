import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [ 'http://localhost:8080', 'http://nuxt.penguri96.com'], // Nuxt 3 클라이언트 주소 (개발 환경에서만)
    methods: ['GET', 'POST'],
    allowedHeaders: 'Content-Type, Authorization',  // 요청에서 허용할 헤더
    credentials: true,  // 클라이언트에서 쿠키나 인증 헤더를 보낼 수 있게 허용
  });
  
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  console.log('port', port)
  await app.listen(port);
}
bootstrap();
