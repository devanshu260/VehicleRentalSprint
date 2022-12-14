import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-bookings-by-vehicle',
  templateUrl: './bookings-by-vehicle.component.html',
  styleUrls: ['./bookings-by-vehicle.component.css']
})
export class BookingsByVehicleComponent implements OnInit {

  constructor(private adminService : AdminServiceService,private router:Router) { }
  type : string="Innova Crysta";
  bookingList =null;
  ngOnInit() {
    // this.adminService.viewBookingByVehicle(this.type).subscribe(
    //   (resp)=>{
    //     console.log(resp);
    //     if(resp!=null){
    //     this.bookingList=resp;
    //   }
    // }
    // )
  }
  
  viewBookingByVehicle(){
    this.adminService.viewBookingByVehicle(this.type).subscribe(
      (resp)=>{
        console.log(resp);
        if(resp!=null){
        this.bookingList=resp;
      }
    }
    )
  }
  goBack(){
    this.router.navigate(['adminArea']);
  }
}
