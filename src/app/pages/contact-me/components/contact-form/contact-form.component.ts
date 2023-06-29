import { Component, OnInit, inject, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { IContactFormModel } from 'src/app/pages/models';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  private formBuilder: FormBuilder = inject(FormBuilder);
  private destroy$ = new Subject<void>();

  contactForm!: FormGroup;
  activeEffect!: string;
  loading = false;
  isSubmitted = false;

  @Output() submit = new EventEmitter<IContactFormModel>;
  @Input() isSubmitted$!: Observable<boolean>;

  constructor() { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.min(2), Validators.max(100), Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.min(2), Validators.max(100), Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]]
    });


    this.isSubmitted$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.loading = false)
      ).subscribe(
        {
          next: success => {
            if (success) {
              this.contactForm.reset();
              this.activeEffect = '';
              this.isSubmitted = true;
              setTimeout(() => this.isSubmitted = false, 4000);
            }
          },
          error: err => console.error(err),
          
        })

    const inputElements = document.querySelectorAll('input');

    this.createTypingObservable(inputElements).pipe(
      takeUntil(this.destroy$)
    ).subscribe((field: string) => {
      this.activeEffect = field;
    });
  }

  createTypingObservable(elements: NodeListOf<Element>): Observable<string> {
    return new Observable<string>((observer) => {
      const eventHandler = (event: Event) => {
        const target = event.target as HTMLInputElement;
        observer.next(target.id);
      };

      elements.forEach((element: Element) => {
        element.addEventListener('input', eventHandler);
      });

      return () => {
        elements.forEach((element: Element) => {
          element.removeEventListener('input', eventHandler);
        });
      };
    }).pipe(
      distinctUntilChanged()
    );
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    this.submit.emit(this.contactForm.value);

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
