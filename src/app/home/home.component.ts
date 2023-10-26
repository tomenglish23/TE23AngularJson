import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
    selector: 'app-home',
    standalone: true,
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, HousingLocationComponent],
    template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search by City</button>
    </form>
  </section>
  <section class="results"> 
    <app-housing-location 
      *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation">
    </app-housing-location>
  </section>
  `
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject (HousingService);
  filteredLocationList:HousingLocation[] = [];
  
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (text) {
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      )
    }
  }
}