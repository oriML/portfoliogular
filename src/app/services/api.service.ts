import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IContactFormModel } from '../pages/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnDestroy {

  private isSubmitted$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor() { }

  get isSubmitted() : Observable<boolean> {
    return this.isSubmitted$.asObservable();
  }

  ngOnDestroy(): void {
    this.isSubmitted$.complete();
  }

  public sendForm(model: IContactFormModel) {
    setTimeout(() => {
      this.isSubmitted$.next(true);
      this.isSubmitted$.next(false);
    }, 2000);
  }

}
