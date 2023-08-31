import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageOnePhotosComponent } from '../page-one-photos/page-one-photos.component';

@Component({
  selector: 'app-dive-deep',
  templateUrl: './dive-deep.component.html',
  styleUrls: ['./dive-deep.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DiveDeepComponent implements OnInit {
  component = PageOnePhotosComponent;

  constructor() {}

  ngOnInit() {}
}
