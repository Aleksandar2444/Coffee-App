import { Component, OnInit } from '@angular/core';
import { PageThreeFeedbackComponent } from '../page-three-feedback/page-three-feedback.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-two-location',
  templateUrl: './page-two-location.component.html',
  styleUrls: ['./page-two-location.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PageTwoLocationComponent implements OnInit {
  component = PageThreeFeedbackComponent;

  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('Page Two View-Will-Enter');
  }

  ionViewWillLeave() {
    console.log('Page Two View-Will-Leave');
  }
}
