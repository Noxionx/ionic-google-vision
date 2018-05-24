import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core'

@Plugin({
  pluginName: 'Country',
  plugin: 'cordova-plugin-country',
  pluginRef: 'plugins.country',
  platforms: ['Android']
})
@Injectable()
export class CountryProvider extends IonicNativePlugin {

  @Cordova()
  get(): Promise<any> { return; }

}
