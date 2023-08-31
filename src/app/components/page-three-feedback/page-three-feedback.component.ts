import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageOnePhotosComponent } from '../page-one-photos/page-one-photos.component';

@Component({
  selector: 'app-page-three-feedback',
  templateUrl: './page-three-feedback.component.html',
  styleUrls: ['./page-three-feedback.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PageThreeFeedbackComponent implements OnInit {
  component = PageOnePhotosComponent;
  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('Page Three View-Will-Enter');
  }

  ionViewDidEnter() {
    console.log('Page Three View-Did-Enter');
  }

  ionViewWillLeave() {
    console.log('Page Three View-Will-Leave');
  }

  ionViewDidLeave() {
    console.log('Page Three View-Did-Leave');
  }
}
