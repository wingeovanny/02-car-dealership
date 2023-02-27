import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'corola',
    },
    {
      id: 2,
      brand: 'Kia',
      model: 'sportage',
    },
    {
      id: 3,
      brand: 'Hyundai',
      model: 'tucson',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    return car;
  }
}
