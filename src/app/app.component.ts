import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'about' }, //new
    { title: 'Menu', url: '/menu', icon: 'menu' }, //new

    { title: 'Coffee', url: '/components/coffee', icon: 'cafe' },
    { title: 'Beer', url: '/components/beer', icon: 'beer' },
    { title: 'Wine', url: '/components/wine', icon: 'wine' },
    { title: 'Ice Cream', url: '/components/ice-cream', icon: 'ice-cream' },
    { title: 'Playground', url: '/playground', icon: 'dice' },
    { title: 'Dive deep', url: '/components/dive-deep', icon: 'star' },

    { title: 'Events', url: '/events', icon: 'event' }, //new
    { title: 'Reservation', url: '/reservation', icon: 'phone' }, //new
  ];
  constructor() {}
}
