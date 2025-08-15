import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      name: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      name: 'Civic',
    },
    {
      id: 3,
      brand: 'Volkswagen',
      name: 'Gol Trend',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new BadRequestException(`Car ${id} not found`);
    return car;
  }
}
