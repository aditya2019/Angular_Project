import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from "./../apiservice.service";

@Component({
  selector: 'app-now-play',
  templateUrl: './now-play.component.html',
  styleUrls: ['./now-play.component.css'],
  providers: [ApiserviceService]
})
export class NowPlayComponent implements OnInit {
  public movieData: any=[];
  public imagePath: any;
  public moviename: any;
  public baseUrl="http://image.tmdb.org/t/p/w185/";
  constructor( private apiService:ApiserviceService) { }

  ngOnInit() {
    this.getinfo();
  }
   getinfo()
   {
      this.apiService.getPosts().subscribe(data=>{
        console.log(data)
        this.movieData=data.results;
        this.imagePath=''+this.movieData.backdrop_path;
      },(error:any)=>{
        console.log(error)
      })
    }

}
