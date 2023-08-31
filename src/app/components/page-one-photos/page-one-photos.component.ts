import { Component, OnInit } from '@angular/core';
import { PageTwoLocationComponent } from '../page-two-location/page-two-location.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-one-photos',
  templateUrl: './page-one-photos.component.html',
  styleUrls: ['./page-one-photos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PageOnePhotosComponent implements OnInit {
  component = PageTwoLocationComponent;

  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('Page One View-Will-Enter');
  }

  ionViewWillLeave() {
    console.log('Page One View-Will-Leave');
  }
}
