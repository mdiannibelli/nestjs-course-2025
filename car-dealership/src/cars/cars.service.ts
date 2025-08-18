import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Volkswagen',
      model: 'Gol Trend',
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

  create(createCarDto: CreateCarDTO) {
    const car: Car = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDTO: UpdateCarDTO) {
    let carToUpdate = this.findById(id);

    if (updateCarDTO.id && updateCarDTO.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carToUpdate = {
          ...carToUpdate,
          ...updateCarDTO,
          id,
        };
        return carToUpdate;
      }
      return car;
    });

    return carToUpdate;
  }

  delete(id: string) {
    const carToDelete = this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== carToDelete.id);

    return carToDelete;
  }
}
