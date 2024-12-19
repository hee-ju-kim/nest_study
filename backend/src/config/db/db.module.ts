import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '../index';
import { DBService } from './db.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('dbURL'),  // config에서 DB URI 값을 가져옵니다.
      }),
    }),
  ],
  providers: [DBService],
  exports: [DBService],
})
export class DBModule {}
