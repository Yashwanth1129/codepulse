import { Component } from '@angular/core';
import { CarsRequest } from '../model/carsrequest.model';
import { CarService } from '../services/car.service';
import { CarsResponse } from '../model/carsresponse.model';
import { CarsResult } from '../model/carsresult.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  discount: string='';
  cost: number=0;

  imageUrl: string = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  

  model: CarsRequest

  constructor(private carService: CarService) {
    this.model = {
      discount: '',
      version: '',
    };

  }

  onFormSubmit(): void {
    this.carService.car(this.model)
    .subscribe({
      next: (response) =>{
        this.discount=response.discount;
        this.cost=response.cost;
      }
    });
  }

 
  
  

  


}
