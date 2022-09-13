import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async getEmployee(@Param() params): Promise<any> {
    return this.appService.getEmployeeById(params.id);
  }
  @Get()
  async createEmployee(): Promise<string> {
    await this.appService.seed();
    return 'Seed is completed';
  }
  @Delete(':id')
  async deleteEmployee(@Param() params): Promise<unknown> {
    return this.appService.deleteEmployeeById(params.id);
  }
}
