import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, DBModule } from './config/index'
import { ItemsModule } from './items/items.module'

@Module({
  imports: [ConfigModule, DBModule, ItemsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
