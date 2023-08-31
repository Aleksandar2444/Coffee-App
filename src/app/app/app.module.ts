import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { DiveDeepComponent } from '../components/dive-deep/dive-deep.component';
import { PageOnePhotosComponent } from '../components/page-one-photos/page-one-photos.component';
import { PageTwoLocationComponent } from '../components/page-two-location/page-two-location.component';
import { PageThreeFeedbackComponent } from '../components/page-three-feedback/page-three-feedback.component';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot({}),
    BrowserModule,
    IonicImageViewerModule,
  ],
  declarations: [
    AppComponent,
    DiveDeepComponent,
    PageOnePhotosComponent,
    PageTwoLocationComponent,
    PageThreeFeedbackComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
