import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LocalservicesService } from '../localservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observemenu',
  templateUrl: './observemenu.page.html',
  styleUrls: ['./observemenu.page.scss'],
})
export class ObservemenuPage implements OnInit {

  constructor(public alertController: AlertController,
              private myservice: LocalservicesService,
              private router: Router) { }

  public resnumberfit;
  public whichteam = {Students: {}};
  public whichstudent = "";

  ngOnInit() {
    this.myservice.getnumberfit()
        .subscribe((data)=>this.resnumberfit = data)
  }

  onSelect(studentid){
    this.router.navigate(['/observemenu', studentid])
  }

hi(you){
  console.log(this.resnumberfit);
}

  selectChange(){
    console.log(this.whichteam);
    console.log(this.whichstudent);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Suggestion',
      message: 'Student Jack can be observed.',
      buttons: [
        {
          text: 'Ignore',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Accept',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}