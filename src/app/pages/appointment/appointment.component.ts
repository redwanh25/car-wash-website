import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  appointmentForm: FormGroup;
  submissionStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  services = [
    { value: 'car-wash', label: 'Premium Car Wash - $15', icon: 'fas fa-car-wash' },
    { value: 'deep-cleaning', label: 'Deep Cleaning - $45', icon: 'fas fa-sparkles' },
    { value: 'light-cleaning', label: 'Light Cleaning - $25', icon: 'fas fa-broom' },
    { value: 'uhaul-rental', label: 'U-Haul Rental - From $19.95/day', icon: 'fas fa-truck' },
    { value: 'house-cleaning', label: 'House/Office Cleaning - Quote', icon: 'fas fa-home' }
  ];

  timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      vehicleDetails: [''],
      specialRequests: [''],
      address: [''],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.submissionStatus = 'loading';
      
      // Simulate API call
      setTimeout(() => {
        console.log('Appointment Data:', this.appointmentForm.value);
        this.submissionStatus = 'success';
        
        // Reset form after success
        setTimeout(() => {
          this.appointmentForm.reset();
          this.submissionStatus = 'idle';
        }, 3000);
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched() {
    Object.keys(this.appointmentForm.controls).forEach(key => {
      const control = this.appointmentForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.appointmentForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.appointmentForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['required']) return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['pattern']) return 'Please enter a valid phone number (10 digits)';
    }
    return '';
  }

  // Get minimum date (today)
  get minDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  // Get maximum date (3 months from now)
  get maxDate(): string {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    return date.toISOString().split('T')[0];
  }
}
