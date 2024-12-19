import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<Item>,
  ) {}

  // 아이템 생성
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel({
      ...createItemDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return createdItem.save();  // MongoDB에 저장
  }

  // 모든 아이템 조회
  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  // 아이템 하나 조회
  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  // 아이템 업데이트
  async update(id: string, updateItemDto: CreateItemDto): Promise<Item> {
    return this.itemModel
      .findByIdAndUpdate(id, updateItemDto, { new: true })
      .exec();
  }

  // 아이템 삭제
  async remove(id: string): Promise<Item> {
    return this.itemModel.findByIdAndDelete(id).exec();
  }
}
