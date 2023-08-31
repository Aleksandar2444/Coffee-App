import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pages/home/:id',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'components/coffee',
    loadComponent: () =>
      import('./components/coffee/coffee.component').then(
        (m) => m.CoffeeComponent
      ),
  },
  {
    path: 'components/beer',
    loadComponent: () =>
      import('./components/beer/beer.component').then((m) => m.BeerComponent),
  },
  {
    path: 'components/wine',
    loadComponent: () =>
      import('./components/wine/wine.component').then((m) => m.WineComponent),
  },
  {
    path: 'components/ice-cream',
    loadComponent: () =>
      import('./components/ice-cream/ice-cream.component').then(
        (m) => m.IceCreamComponent
      ),
  },
  {
    path: 'components/dive-deep',
    loadComponent: () =>
      import('./components/dive-deep/dive-deep.component').then(
        (m) => m.DiveDeepComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'playground',
    loadComponent: () =>
      import('./pages/playground/playground.page').then(
        (m) => m.PlaygroundPage
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
