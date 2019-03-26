import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { LocalservicesService } from '../localservices.service';
import { ActivatedRoute } from '@angular/router';
import { ObservedataService } from '../observedata.service';

@Component({
  selector: 'app-observe-detail',
  templateUrl: './observe-detail.page.html',
  styleUrls: ['./observe-detail.page.scss'],
})

export class ObserveDetailPage implements OnInit {
    
  constructor(public navCtrl: NavController,
              private myservice: LocalservicesService,
              private route: ActivatedRoute,
              private observedataservice: ObservedataService,
              public alertController: AlertController) { this.startTimer();}

  public resnumberfit;
  public studentId;
  public observeData;
  public timer;
  public interval;

  ngOnInit() {
    this.myservice.getnumberfit()
        .subscribe((data)=>{
          this.resnumberfit = data;
          this.timer = this.resnumberfit.ObservationAPPparams.ConfigParameters.SamplingTimeInSeconds;
        })
    let studentid = this.route.snapshot.paramMap.get('studentid'); //get studentid in the url
    this.studentId = studentid;
    }

  onSubmit(observeFormvalue){
    this.observeData = observeFormvalue;
    this.observeData.studentid = this.studentId;
    this.observedataservice.observedata(this.observeData)
        .subscribe(
          data => console.log('success!', data),
          error => console.log('error!', error)
        )
  }

  startTimer() {
    if (this.interval) return;
    this.interval = setInterval(() => {
      if(this.timer > 0) {
        this.timer--;
      } else {
        this.presentAlertConfirm()
        clearInterval(this.interval);
        this.interval = null;
        this.timer = this.resnumberfit.ObservationAPPparams.ConfigParameters.SamplingTimeInSeconds;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }

  //ionViewDidLoad(){
    //console.log('hello');}

  test(){
    console.log('ssss')
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Add Time',
      message: 'Do you want to add more observe time?',
      buttons: [
        {
          text: 'No and Save Data',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //this.timer = 0;
            console.log('Add time Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.startTimer();
            console.log('Add time Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}