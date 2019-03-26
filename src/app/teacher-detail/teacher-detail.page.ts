import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { LocalservicesService } from '../localservices.service';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.page.html',
  styleUrls: ['./teacher-detail.page.scss'],
})
export class TeacherDetailPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController,
              private myservice: LocalservicesService,
              private route: ActivatedRoute,
              private camera: Camera) { }

  public resnumberfit;
  public activityTitle;
  public photos;

  ngOnInit() {
    this.myservice.getnumberfit()
        .subscribe((data)=>this.resnumberfit = data)
    let activitytitle = this.route.snapshot.paramMap.get('activitytitle'); //get activitytitle in the url
    this.activityTitle = activitytitle;
  }

  async addinfo() {
    const actionSheet = await this.actionSheetController.create({
      header: 'choose file',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'images',
        handler: () => {
          const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          
          this.camera.getPicture(options).then((imageData) => {
           // imageData is either a base64 encoded string or a file URI
           // If it's base64 (DATA_URL):
           this.photos = 'data:image/jpeg;base64,' + imageData;
          }, (err) => {
           // Handle error
          });
        }
      }, {
        text: 'voice',
        icon: 'recording',
        handler: () => {
          console.log('Voice clicked');
        }
      }, {
        text: 'text',
        icon: 'text',
        handler: () => {
          console.log('Text clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
