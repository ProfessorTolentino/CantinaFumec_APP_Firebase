import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  AngularFirestoreModule
} from '@angular/fire/compat/firestore';

import { firebaseConfig } from './firebaseConfig';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig.fire)),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig.fire },
    AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
