import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReunionesPage } from '../pages/reuniones/reuniones';
import { AmigosPage } from '../pages/amigos/amigos';
import { NewReunionPage } from '../pages/new-reunion/new-reunion';
import { NewAmigoPage } from '../pages/new-amigo/new-amigo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReunionesPage,
    AmigosPage,
    NewAmigoPage,
    NewReunionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ReunionesPage,
    AmigosPage,
    NewReunionPage,
    NewAmigoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
