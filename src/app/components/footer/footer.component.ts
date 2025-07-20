import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', name: 'Facebook' },
    { icon: 'fab fa-twitter', url: '#', name: 'Twitter' },
    { icon: 'fab fa-instagram', url: '#', name: 'Instagram' },
    { icon: 'fab fa-linkedin-in', url: '#', name: 'LinkedIn' },
    { icon: 'fab fa-youtube', url: '#', name: 'YouTube' }
  ];

  quickLinks = [
    { title: 'Home', route: '/' },
    { title: 'Services', route: '/services' },
    { title: 'About Us', route: '/about' },
    { title: 'Contact', route: '/contact' },
    { title: 'Book Appointment', route: '/appointment' }
  ];

  services = [
    { title: 'Car Wash', route: '/services' },
    { title: 'Deep Cleaning', route: '/cleaning/deep' },
    { title: 'Light Cleaning', route: '/cleaning/light' },
    { title: 'U-Haul Rental', route: '/uhaul' },
    { title: 'House Cleaning', route: '/services' }
  ];
}
