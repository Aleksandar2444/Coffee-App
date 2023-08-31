import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataProductsService } from '../../services/data-products.service';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [DataProductsService],
})
export class IceCreamComponent implements OnInit {
  public iceCream!: string;
  private activateRoute = inject(ActivatedRoute);

  public jsonData: any = [];

  constructor(private dataProductsService: DataProductsService) {}

  ngOnInit() {
    this.iceCream = this.activateRoute.snapshot.paramMap.get('id') as string;

    this.dataFetch();
  }

  dataFetch() {
    this.dataProductsService.fetchIceCreamData();
    this.dataProductsService.jsonData$.subscribe((data) => {
      this.jsonData = data;
    });
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();

    if (query === '') {
      this.jsonData = this.dataFetch();
    } else {
      this.jsonData = this.jsonData.filter((d: any) => {
        return d.name.toLowerCase().indexOf(query) > -1;
      });
    }
  }
}
