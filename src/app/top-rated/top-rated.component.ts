import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from "./../apiservice.service";
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
  providers: [ApiserviceService]
})
export class TopRatedComponent implements OnInit {
  public topData: any=[];
  public imagePath: any;
  public moviename: any;
  public baseUrl="http://image.tmdb.org/t/p/w185/";
  constructor( private apiService:ApiserviceService) { }

  ngOnInit() {
    this.getinfo();
  }
   getinfo()
   {
      this.apiService.getToprated().subscribe(data=>{
        console.log(data)
        this.topData=data.results;
        this.imagePath=''+this.topData.backdrop_path;
      },(error:any)=>{
        console.log(error)
      })
    }

}
