import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  mainServices = [
    {
      icon: 'fas fa-truck',
      title: 'Premium Car Wash',
      description: 'Complete exterior and interior car washing service with eco-friendly products.',
      features: ['Exterior hand wash', 'Interior vacuuming', 'Window cleaning', 'Tire shine', 'Air freshener'],
      price: '$15',
      duration: '30 mins',
      popular: true
    },
    {
      icon: 'fas fa-truck',
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning service for vehicles, homes, and offices.',
      features: ['Complete detailing', 'Engine bay cleaning', 'Paint protection', 'Leather treatment', 'Carpet shampooing'],
      price: '$45',
      duration: '2 hours',
      popular: false
    },
    {
      icon: 'fas fa-broom',
      title: 'Light Cleaning',
      description: 'Quick and efficient cleaning for busy schedules.',
      features: ['Basic wash', 'Interior wipe down', 'Dashboard cleaning', 'Window cleaning'],
      price: '$25',
      duration: '45 mins',
      popular: false
    },
    {
      icon: 'fas fa-truck',
      title: 'U-Haul Rental',
      description: 'Reliable truck rental for moving and transportation needs.',
      features: ['Various truck sizes', 'Daily/weekly rates', 'Insurance options', '24/7 roadside assistance'],
      price: 'From $19.95/day',
      duration: 'Flexible',
      popular: false
    }
  ];

  additionalServices = [
    { name: 'House Cleaning', price: 'Quote on request', icon: 'fas fa-home' },
    { name: 'Office Cleaning', price: 'Quote on request', icon: 'fas fa-building' },
    { name: 'Carpet Cleaning', price: '$30+', icon: 'fas fa-rug' },
    { name: 'Upholstery Cleaning', price: '$25+', icon: 'fas fa-couch' }
  ];
}
