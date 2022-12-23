import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.page.html',
  styleUrls: ['./review-page.page.scss'],
})
export class ReviewPagePage implements OnInit {

  constructor(private alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      // header: 'Alert',
      // subHeader: 'Important message',
      message: 'Thankyou for your Feedback! your review helps us Improve our services.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
