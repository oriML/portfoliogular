import { Injectable, OnDestroy, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteTitleService implements OnDestroy {

  private router: Router = inject(Router);
  private titleService: Title = inject(Title);
  private destroy$: Subject<void> = new Subject<void>();

  public title: string = '';

  constructor() {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => this.titleService.setTitle(this.title));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }


}
