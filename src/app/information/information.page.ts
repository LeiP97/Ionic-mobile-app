import { Component, OnInit } from '@angular/core';
import { LocalservicesService } from '../localservices.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  public resnumberfit;


 
  constructor(private myservice: LocalservicesService) { 
  }

  ngOnInit() {
    this.myservice.getnumberfit()
        .subscribe((data)=>this.resnumberfit = data) 
  }
  
}
