import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataProductsService } from 'src/app/services/data-products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.page.html',
  styleUrls: ['./playground.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [DataProductsService],
})
export class PlaygroundPage implements OnInit {
  @ViewChild('title') title: any;
  @ViewChild('cup') cup: any;

  public coffeeList: any = [];

  constructor(
    private renderer: Renderer2,
    private dataProductsService: DataProductsService
  ) {}

  ngOnInit() {
    this.dataFetch();
  }

  dataFetch() {
    this.dataProductsService.getCoffees();
    this.dataProductsService.jsonData$.subscribe((data) => {
      this.coffeeList = data;
    });
  }

  displayElement(type: any) {
    this.renderer.removeAttribute(this.cup.nativeElement, 'class');
    this.renderer.addClass(this.cup.nativeElement, 'cup');
    this.renderer.addClass(this.cup.nativeElement, type);
    this.title.nativeElement.innerHTML = type;
  }
}
