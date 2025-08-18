import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars() {
    return this.carsService.findAll();
  }

  @Get(':id') // new ParseUUIDPipe({ version: '4' })
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findById(id);
  }

  @Post()
  /* @UsePipes(ValidationPipe) */
  createCar(@Body() createCarDto: CreateCarDTO) {
    return createCarDto;
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
