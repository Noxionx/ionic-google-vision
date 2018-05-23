import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { FaceDetectorProvider } from '../../providers/face-detector/face-detector'

declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private faceDetector: FaceDetectorProvider,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      alert(JSON.stringify(cordova));
    });
  }

  start() {
    const success = rep => alert(`--- STARTED ---\n${rep}`);
    const error = err => alert(`--- START ERROR ---\n${JSON.stringify(err)}`);

    cordova.exec(success, error, 'FaceDetector', 'start', []);
    /*this.faceDetector.start()
      .then(success)
      .catch(error)*/
  }

  stop() {
    this.faceDetector.start()
      .then(rep => alert(`--- STOPPED ---\n${rep}`))
      .catch(err => alert(`--- STOP ERROR ---\n${JSON.stringify(err)}`))
  }
}
