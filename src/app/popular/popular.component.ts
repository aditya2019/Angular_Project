import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from "./../apiservice.service";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
    providers: [ApiserviceService]
})
export class PopularComponent implements OnInit {
  public popData: any=[];
  public imagePath: any;
  public moviename: any;
  public baseUrl="http://image.tmdb.org/t/p/w185/";
  constructor( private apiService:ApiserviceService ) { }

  ngOnInit() {
    this.getinfo();
  }
  getinfo()
  {
     this.apiService.getPopular().subscribe(data=>{
       console.log(data)
       this.popData=data.results;
       this.imagePath=''+this.popData.backdrop_path;
     },(error:any)=>{
       console.log(error)
     })
   }

}
