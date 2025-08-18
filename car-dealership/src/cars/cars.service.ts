import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      name: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      name: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Volkswagen',
      name: 'Gol Trend',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new BadRequestException(`Car ${id} not found`);
    return car;
  }
}
