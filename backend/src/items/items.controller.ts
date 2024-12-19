import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // POST /items - 아이템 생성
  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  // GET /items - 모든 아이템 조회
  @Get()
  async findAll() {
    return this.itemsService.findAll();
  }

  // GET /items/:id - 아이템 하나 조회
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  // PUT /items/:id - 아이템 수정
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItemDto: CreateItemDto,
  ) {
    return this.itemsService.update(id, updateItemDto);
  }

  // DELETE /items/:id - 아이템 삭제
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }
}
