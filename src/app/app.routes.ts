import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'services', 
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  { 
    path: 'cleaning/deep', 
    loadComponent: () => import('./pages/cleaning/cleaning.component').then(m => m.CleaningComponent),
    data: { type: 'deep' }
  },
  { 
    path: 'cleaning/light', 
    loadComponent: () => import('./pages/cleaning/cleaning.component').then(m => m.CleaningComponent),
    data: { type: 'light' }
  },
  { 
    path: 'uhaul', 
    loadComponent: () => import('./pages/uhaul/uhaul.component').then(m => m.UhaulComponent)
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: 'appointment', 
    loadComponent: () => import('./pages/appointment/appointment.component').then(m => m.AppointmentComponent)
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
