import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    return await this.appService.getHello();
  }

  @Get('one')
  async getHelloAsync(): Promise<any> {
    return await this.appService.getHelloAsync();
  }

  @Get('two')
  async publishEvent(): Promise<void> {
    this.appService.publishEvent();
  }
}
