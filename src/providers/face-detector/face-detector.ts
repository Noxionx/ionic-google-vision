import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

@Plugin({
  pluginName: 'FaceDetector',
  plugin: 'cordova-plugin-jouve-facedetector',
  pluginRef: 'FaceDetector',
  platforms: ['Android']
})

@Injectable()
export class FaceDetectorProvider extends IonicNativePlugin {

  @Cordova()
  start(): Promise<any> { return; }

  @Cordova()
  stop(): Promise<any> { return; }
}
