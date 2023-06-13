import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './core/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeENSL from '@angular/common/locales/en-SL';
import { MaskPipe } from './shared/mask.pipe';

registerLocaleData(localeENSL);

@NgModule({
  declarations: [AppComponent, MaskPipe],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [
    HttpClientModule,
    httpInterceptorProviders,
    { provide: LOCALE_ID, useValue: 'en-SL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
