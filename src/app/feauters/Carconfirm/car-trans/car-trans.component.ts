import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarpriceService } from '../../bookcar/service/carprice.service';


@Component({
  selector: 'app-car-trans',
  templateUrl: './car-trans.component.html',
  styleUrls: ['./car-trans.component.css']
})
export class CarTransComponent {

cost: number=0;
pickupdate: string='';
returndate: string='';
name: string='';
res: string='';
constructor(private router: ActivatedRoute) {}
ngOnInit(): void {
  // Retrieve the 'cost' route parameter
  this.router.params.subscribe((params) => {
    this.cost = +params['cost'];
    this.name = params['name'];
    this.pickupdate = params['pickupdate'];
    this.returndate = params['returndate'];
    this.res = params['res']; // Convert the parameter to a number
  });
}

}
