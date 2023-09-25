import { Component } from '@angular/core';
import { CarBook } from '../model/carbook.model';
import { CarpriceService } from '../service/carprice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carfrom',
  templateUrl: './carfrom.component.html',
  styleUrls: ['./carfrom.component.css']
})
export class CarfromComponent {
  cost: number=0;
  pickupdate: string='';
  returndate: string='';
  name: string='';
  res: string='';
  model: CarBook;
  constructor(private carPriceService: CarpriceService,
    private router: Router){
    this.model={
      pickupdate:0,
      returndate:0,
      fullname:'',
      email:''
    };
  }

  submitBooking(): void{
    this.carPriceService.carprice(this.model)
    .subscribe({
      next: (response) =>{
        this.cost=response.cost;
        this.name=response.name;
        this.pickupdate=response.pickupDate;
        this.returndate=response.returnDate;
        this.res=response.res;
        this.router.navigate(['bookcar/confirm', { cost: this.cost, name: this.name, pickupdate: this.pickupdate, returndate: this.returndate, res: this.res}]);
        

      }
    });
  }

}
