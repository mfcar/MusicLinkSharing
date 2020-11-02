import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasteUrlBarComponent } from './layout/paste-url-bar/paste-url-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShareButtonComponent } from './shared/components/share-button/share-button.component';
import { PasteClipboardButtonComponent } from './shared/components/paste-clipboard-button/paste-clipboard-button.component';
import { LoadingCardComponent } from './shared/cards/loading-card/loading-card.component';
import { ErrorCardComponent } from './shared/cards/error-card/error-card.component';
import { TrackInfoCardComponent } from './shared/cards/track-info-card/track-info-card.component';
import { LinkSearchCardComponent } from './shared/cards/link-search-card/link-search-card.component';
import { ServiceShareLinkCardComponent } from './shared/cards/service-share-link-card/service-share-link-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PasteUrlBarComponent,
    ShareButtonComponent,
    PasteClipboardButtonComponent,
    LoadingCardComponent,
    ErrorCardComponent,
    TrackInfoCardComponent,
    LinkSearchCardComponent,
    ServiceShareLinkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
