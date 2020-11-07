import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
import { environment, SERVER_URL_BE, SERVER_URL_FE } from '../../environments/environment';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {
  public showCamera = false;
public textScanned: string = '';
 

  constructor(
    private router: Router,
    private http: HttpClient,
    private ac: AlertController,
    private qrScanner: QRScanner,
    public alertController: AlertController) {
      this.scanCode();
    }
    closeCamera() {
      this.showCamera = false;
      this.qrScanner.hide(); // hide camera preview
      this.qrScanner.destroy();
    }
    scanCode() {
      this.showCamera = true;
      // Optionally request the permission early
      this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // start scanning
          console.log('Scan en cours...' + JSON.stringify(status));
          const scanSub = this.qrScanner.scan().subscribe((text: any) => {
            console.log('Scanned something', text.result);
            this.textScanned = text.result;
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            this.showCamera = false;
          });
        } else if (status.denied) {
          // camera permission was permanently denied
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
    }
  
}