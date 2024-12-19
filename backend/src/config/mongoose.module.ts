import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],  // ConfigModule을 임포트하여 의존성 주입
      inject: [ConfigService],  // ConfigService 주입
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('dbUrl'),  // ConfigService에서 데이터베이스 URL을 가져오기
      }),
    }),
  ]
})
export class ConfigModule {}