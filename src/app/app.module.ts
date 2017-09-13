import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadosPage } from '../pages/terminados/terminados';
import { AgregarPage } from '../pages/agregar/agregar';
import { DetallePage } from '../pages/detalle/detalle';

//pipes
import {PlaceHolderPipe} from './pipes/placeholder.pipe';
import {PendientesPipe} from './pipes/pendientes.pipe';


//servicios
import { ListaDeseosProvider } from './services/lista-deseos.service';

@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    PendientesPipe,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosProvider
  ]
})
export class AppModule {}
