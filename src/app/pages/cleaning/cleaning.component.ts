import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cleaning',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.scss']
})
export class CleaningComponent implements OnInit {
  cleaningType: 'deep' | 'light' = 'deep';
  features: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.cleaningType = this.route.snapshot.data['type'] || 'deep';
    
    if (this.cleaningType === 'deep') {
      this.features = [
        'Complete interior and exterior wash',
        'Engine bay cleaning and detailing',
        'Paint protection and waxing',
        'Leather conditioning and treatment',
        'Carpet and upholstery shampooing',
        'Chrome and metal polishing',
        'Tire and wheel deep cleaning',
        'Air freshener and deodorizing'
      ];
    } else {
      this.features = [
        'Exterior hand wash and rinse',
        'Interior vacuum and wipe down',
        'Dashboard and console cleaning',
        'Window and mirror cleaning',
        'Basic tire and wheel wash',
        'Air freshener application'
      ];
    }
  }
}
