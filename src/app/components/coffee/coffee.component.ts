import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataProductsService } from '../../services/data-products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [DataProductsService],
})
export class CoffeeComponent implements OnInit {
  public coffee!: string;
  private activateRoute = inject(ActivatedRoute);

  public jsonData: any = [];

  constructor(private dataProductsService: DataProductsService) {}

  ngOnInit() {
    this.coffee = this.activateRoute.snapshot.paramMap.get('id') as string;

    this.dataFetch();
  }

  dataFetch() {
    this.dataProductsService.fetchCoffeeData();
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
