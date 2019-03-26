import { Component, OnInit } from '@angular/core';
import { LocalservicesService } from '../localservices.service';

@Component({
  selector: 'app-sessioninfo',
  templateUrl: './sessioninfo.page.html',
  styleUrls: ['./sessioninfo.page.scss'],
})
export class SessioninfoPage implements OnInit {

  constructor(private myservice: LocalservicesService) { }

  public resnumberfit;

  ngOnInit() {
    this.myservice.getnumberfit()
        .subscribe((data)=>this.resnumberfit = data)
  }

}
