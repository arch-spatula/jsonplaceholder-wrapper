import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id', ParseIntPipe) id: number): Promise<Post> {
    return this.appService.getHello(id);
  }
}
