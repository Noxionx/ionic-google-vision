import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

@Plugin({
  pluginName: 'FaceDetector',
  plugin: 'cordova-plugin-jouve-facedetector',
  platforms: ['Android'],
  pluginRef: 'FaceDetector',
  repo: 'https://github.com/Noxionx/cordova-plugin-jouve-facedetector'
})

@Injectable()
export class FaceDetectorProvider extends IonicNativePlugin {

  @Cordova()
  start(): Promise<any> { return; }

  @Cordova()
  stop(): Promise<any> { return; }
}
