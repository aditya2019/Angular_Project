import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/add/operator/map";


@Injectable()
export class ApiserviceService {
  public keyword: any;
  private _postsURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&page=3";
  private _popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&page=3";
  private _topURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&page=3";
  private _upcURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&page=3";
  constructor(private http: Http)
  { }

getPosts(){
return this.http.get(this._postsURL).map(data =>
  data.json(),
  (error:any)=> this.handleError(error));
}


getPopular(){
  return this.http.get(this._popularURL).map(data =>
    data.json(),
    (error:any)=> this.handleError(error));
}

getToprated(){
  return this.http.get(this._topURL).map(data =>
    data.json(),
    (error:any)=> this.handleError(error));
}

getUpc(){
  return this.http.get(this._upcURL).map(data =>
    data.json(),
    (error:any)=> this.handleError(error));
}

      private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
