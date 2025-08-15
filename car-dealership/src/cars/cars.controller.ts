import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() data: any) {
    return data;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return data;
  }

  @Delete()
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
