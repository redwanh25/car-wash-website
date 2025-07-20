import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      icon: 'fas fa-car-wash',
      title: 'Premium Car Wash',
      description: 'Professional car washing with eco-friendly products',
      features: ['Exterior Wash', 'Interior Vacuum', 'Tire Shine', 'Air Freshener'],
      price: '$15',
      route: '/services'
    },
    {
      icon: 'fas fa-sparkles',
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning for cars, homes & offices',
      features: ['Complete Interior Detail', 'Engine Bay Cleaning', 'Paint Protection', 'Leather Treatment'],
      price: '$45',
      route: '/cleaning/deep'
    },
    {
      icon: 'fas fa-broom',
      title: 'Light Cleaning',
      description: 'Quick and efficient light cleaning service',
      features: ['Basic Wash', 'Interior Wipe', 'Window Cleaning', 'Dashboard Clean'],
      price: '$25',
      route: '/cleaning/light'
    },
    {
      icon: 'fas fa-truck',
      title: 'U-Haul Rental',
      description: 'Reliable truck rental for your moving needs',
      features: ['Various Sizes', 'Daily/Weekly Rates', 'Insurance Options', '24/7 Support'],
      price: 'From $19.95/day',
      route: '/uhaul'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service! My car has never looked better. The team is professional and efficient.',
      image: 'assets/images/testimonial-1.jpg'
    },
    {
      name: 'Mike Rodriguez',
      rating: 5,
      comment: 'Great U-Haul rental experience. Clean trucks and transparent pricing. Highly recommend!',
      image: 'assets/images/testimonial-2.jpg'
    },
    {
      name: 'Emily Chen',
      rating: 5,
      comment: 'The deep cleaning service exceeded my expectations. Attention to detail is remarkable.',
      image: 'assets/images/testimonial-3.jpg'
    }
  ];

  stats = [
    { number: '10,000+', label: 'Cars Washed', icon: 'fas fa-car' },
    { number: '5,000+', label: 'Happy Customers', icon: 'fas fa-users' },
    { number: '50+', label: 'U-Haul Rentals', icon: 'fas fa-truck' },
    { number: '99%', label: 'Satisfaction Rate', icon: 'fas fa-star' }
  ];
}
