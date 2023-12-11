import { Component, ViewChild, ElementRef} from '@angular/core';
import { Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, QRCodeModule ],
})
export class HomePage {
  qrCodeValue: string = 'https://www.dropbox.com/scl/fi/ump4gyb1j6aym4l06mj93/DuocTAP.apk?rlkey=aijfjtmx1oewpk7os7m9lcbyk&dl=0';
  isDesktop: boolean = false;

  constructor(private platform: Platform) {
    this.isDesktop = !this.platform.is('mobile');
  }
}
