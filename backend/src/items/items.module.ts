import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemSchema } from './item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]), // MongoDB 모델 연결
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],  // 다른 모듈에서 사용 가능하게 export
})
export class ItemsModule {}
