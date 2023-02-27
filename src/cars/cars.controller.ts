import { CarsService } from './cars.service';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) idd: number) {
    return this.carsService.findById(idd);
  }
}
