import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { NomedadiretivaDirective } from './nomedadiretiva.directive';
import { AlterarTextoDirective } from './alterar-texto.directive';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';

import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { RaizQuadrada } from './pipe-raiz-quadrada';
import { HomeComponent } from './home/home.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NomedadiretivaDirective,
    AlterarTextoDirective,
    ComponenteFilhoComponent,
    RaizQuadrada,
    //HomeComponent,
    //FaleConoscoComponent,
    RoutingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ {
    provide: LOCALE_ID,
    useValue: 'pt'
    },
    {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
