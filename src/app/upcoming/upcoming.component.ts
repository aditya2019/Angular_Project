import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from "./../apiservice.service";
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  providers: [ApiserviceService]
})
export class UpcomingComponent implements OnInit {
  public upcData: any=[];
  public imagePath: any;
  public moviename: any;
  public baseUrl="http://image.tmdb.org/t/p/w185/";
  constructor( private apiService:ApiserviceService) { }
  ngOnInit() {
    this.getinfo();
  }
   getinfo()
   {
      this.apiService.getUpc().subscribe(data=>{
        console.log(data)
        this.upcData=data.results;
        this.imagePath=''+this.upcData.backdrop_path;
      },(error:any)=>{
        console.log(error)
      })
    }

}
