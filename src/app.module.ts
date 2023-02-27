import { CarsModule } from './cars/cars.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
