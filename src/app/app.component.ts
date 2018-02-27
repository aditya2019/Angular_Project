import {Component, OnInit} from "@angular/core";
import {ApiserviceService} from "./apiservice.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiserviceService]
})
export class AppComponent implements OnInit {

    public movieData: any;
    public imagePath: any;

    constructor(private apiSerivce: ApiserviceService) {
    }


    ngOnInit(): void {
        // this.getPosts();
    }
}
