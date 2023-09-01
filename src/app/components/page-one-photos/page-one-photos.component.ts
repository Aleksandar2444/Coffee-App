import { Component, OnInit } from '@angular/core';
import { PageTwoLocationComponent } from '../page-two-location/page-two-location.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataProductsService } from 'src/app/services/data-products.service';

@Component({
  selector: 'app-page-one-photos',
  templateUrl: './page-one-photos.component.html',
  styleUrls: ['./page-one-photos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [DataProductsService],
})
export class PageOnePhotosComponent implements OnInit {
  component = PageTwoLocationComponent;

  public jsonData: any = [];

  constructor(private dataProductsService: DataProductsService) {}

  ngOnInit() {
    this.dataFetch();
  }

  dataFetch() {
    this.dataProductsService.getCoffeeBarPhotos();
    this.dataProductsService.jsonData$.subscribe((data) => {
      this.jsonData = data;
    });
  }
}
