import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  private formBuilder: FormBuilder = inject(FormBuilder);

  contactForm!: FormGroup;
  activeEffect!: string;
  isSubmitting = false;
  isSubmitted = false;

  private destroy$ = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.min(2), Validators.max(100), Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.min(2), Validators.max(100), Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]]
    });

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

    this.isSubmitting = true;
    setTimeout(() => {
      this.contactForm.reset();
      this.isSubmitting = false;
      this.isSubmitted = true;
    }, 2000);
    setTimeout(() => this.isSubmitted = false , 4000);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
