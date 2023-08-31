import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataProductsService implements OnDestroy {
  private jsonDataSubject = new BehaviorSubject<any>(null);
  jsonData$ = this.jsonDataSubject.asObservable();

  private unsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  fetchCoffeeData() {
    return this.http
      .get('assets/coffee.json')
      .pipe(
        map((data) => {
          this.jsonDataSubject.next(data);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  fetchBeerData() {
    return this.http
      .get('assets/beer.json')
      .pipe(
        map((data) => {
          this.jsonDataSubject.next(data);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  fetchIceCreamData() {
    return this.http
      .get('assets/ice-cream.json')
      .pipe(
        map((data) => {
          this.jsonDataSubject.next(data);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  fetchWineData() {
    return this.http
      .get('assets/wine.json')
      .pipe(
        map((data) => {
          this.jsonDataSubject.next(data);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  getCoffees() {
    return this.http
      .get('assets/playground.json')
      .pipe(
        map((data) => {
          this.jsonDataSubject.next(data);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  getCoffeeBarPhotos() {
    return this.http
      .get('assets/coffee-bar.json')
      .pipe(
        map((data) => {
          this.jsonDataSubject.next(data);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
