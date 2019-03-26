import { Component, OnInit } from '@angular/core';
import { LocalservicesService } from '../localservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachermenu',
  templateUrl: './teachermenu.page.html',
  styleUrls: ['./teachermenu.page.scss'],
})
export class TeachermenuPage implements OnInit {

  constructor(private myservice: LocalservicesService,
              private router: Router) { }

  public resnumberfit;

  ngOnInit() {
    this.myservice.getnumberfit()
        .subscribe((data)=>this.resnumberfit = data)
  }

  onSelect(activity){
    this.router.navigate(['/teachermenu', activity.Title])
  }
}
