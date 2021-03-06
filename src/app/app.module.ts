import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShareButtonComponent } from './shared/components/share-button/share-button.component';
import { PasteClipboardButtonComponent } from './shared/components/paste-clipboard-button/paste-clipboard-button.component';
import { LoadingCardComponent } from './cards/loading-card/loading-card.component';
import { ErrorCardComponent } from './cards/error-card/error-card.component';
import { TrackInfoCardComponent } from './cards/track-info-card/track-info-card.component';
import { LinkSearchCardComponent } from './cards/link-search-card/link-search-card.component';
import { ServiceShareLinkCardComponent } from './cards/service-share-link-card/service-share-link-card.component';
import { AlbumInfoCardComponent } from './cards/album-info-card/album-info-card.component';
import { AboutComponent } from './about/about.component';
import { InfoCalloutComponent } from './shared/components/info-callout/info-callout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ShareButtonComponent,
    PasteClipboardButtonComponent,
    LoadingCardComponent,
    ErrorCardComponent,
    TrackInfoCardComponent,
    LinkSearchCardComponent,
    ServiceShareLinkCardComponent,
    AlbumInfoCardComponent,
    AboutComponent,
    InfoCalloutComponent
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
