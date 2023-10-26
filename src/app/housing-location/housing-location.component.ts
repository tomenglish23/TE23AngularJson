import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name}}" />
      <h5 class="listing-heading">{{ housingLocation.name }}</h5>
      <p class="listing-location">{{ housingLocation.city}}, {{ housingLocation.state }}</p>
      <a class="listing-details-link" [routerLink]="['/details', housingLocation.id]">Learn More</a>
      <p class="listing-details-link">Adrianna!</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}
