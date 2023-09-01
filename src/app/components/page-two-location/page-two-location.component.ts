import { Component, OnInit, inject } from '@angular/core';
import { PageThreeFeedbackComponent } from '../page-three-feedback/page-three-feedback.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-page-two-location',
  templateUrl: './page-two-location.component.html',
  styleUrls: ['./page-two-location.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
})
export class PageTwoLocationComponent implements OnInit {
  component = PageThreeFeedbackComponent;

  public photos!: string;
  private activateRoute = inject(ActivatedRoute);

  constructor() {
    this.photos = this.activateRoute.snapshot.paramMap.get('id') as string;
    console.log(this.photos);
  }

  ngOnInit() {}
}
