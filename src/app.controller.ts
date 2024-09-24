import { Controller, Get, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.appService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.appService.remove(id);
  }
}