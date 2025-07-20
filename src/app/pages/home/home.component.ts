import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  route: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
}

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services: Service[] = [
    {
      title: 'Car Wash & Detail',
      description: 'Professional exterior and interior car cleaning services',
      icon: 'fas fa-car',
      features: [
        'Exterior wash & wax',
        'Interior vacuuming',
        'Dashboard cleaning',
        'Tire shine'
      ],
      price: 'Starting at $25',
      route: '/services'
    },
    {
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning for homes and offices',
      icon: 'fas fa-home',
      features: [
        'Complete sanitization',
        'Floor-to-ceiling clean',
        'Eco-friendly products',
        'Post-construction cleanup'
      ],
      price: 'Starting at $150',
      route: '/cleaning/deep'
    },
    {
      title: 'Light Cleaning',
      description: 'Regular maintenance cleaning services',
      icon: 'fas fa-broom',
      features: [
        'Basic room cleaning',
        'Surface dusting',
        'Floor cleaning',
        'Bathroom maintenance'
      ],
      price: 'Starting at $75',
      route: '/cleaning/light'
    },
    {
      title: 'U-Haul Rentals',
      description: 'Reliable moving truck and equipment rentals',
      icon: 'fas fa-truck',
      features: [
        '24/7 pickup availability',
        'Various truck sizes',
        'Moving equipment',
        'Competitive rates'
      ],
      price: 'Starting at $29.95',
      route: '/uhaul'
    }
  ];

  stats: Stat[] = [
    {
      number: '2,500+',
      label: 'Happy Customers',
      icon: 'fas fa-users'
    },
    {
      number: '5,000+',
      label: 'Cars Washed',
      icon: 'fas fa-car'
    },
    {
      number: '1,200+',
      label: 'Homes Cleaned',
      icon: 'fas fa-home'
    },
    {
      number: '500+',
      label: 'U-Haul Rentals',
      icon: 'fas fa-truck'
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service! My car looks brand new after their detailing. The staff is professional and thorough. Highly recommended!'
    },
    {
      name: 'Mike Rodriguez',
      rating: 5,
      comment: 'I hired them for deep cleaning after renovation. They did an incredible job removing all the dust and debris. Worth every penny!'
    },
    {
      name: 'Emily Chen',
      rating: 5,
      comment: 'Great U-Haul rental experience. The truck was clean, well-maintained, and pickup was super convenient. Will use again for my next move!'
    },
    {
      name: 'David Thompson',
      rating: 4,
      comment: 'Regular customer here. Their light cleaning service keeps my office spotless. Reliable and reasonably priced.'
    },
    {
      name: 'Lisa Williams',
      rating: 5,
      comment: 'Outstanding car wash service! They pay attention to every detail. My BMW has never looked better. Premium quality work!'
    },
    {
      name: 'James Brown',
      rating: 5,
      comment: 'Professional home cleaning team. They transformed my house completely. Very satisfied with their eco-friendly approach.'
    }
  ];
}
