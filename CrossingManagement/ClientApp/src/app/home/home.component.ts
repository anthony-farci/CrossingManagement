import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RailroadCrossingsService } from '../services/railroad-crossings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public railroadCrossings: RailroadCrossing[] = [];
  selectedRailroadCrossing?: RailroadCrossing;

  constructor(http: HttpClient, private railroadCrossingsService: RailroadCrossingsService) {
    /*http.get<RailroadCrossing[]>("https://opendata.infrabel.be/api/v2/catalog/datasets/geoow/exports/json?limit=-1&offset=0&timezone=UTC").subscribe(result => {
      this.railroadCrossings = result;
    }, error => console.error(error));*/
  }

  ngOnInit(): void {
    this.railroadCrossingsService.getAllRailroadCrossings().subscribe({
      next: (railroadCrossings) => {
        this.railroadCrossings = railroadCrossings;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  onChange(railroadCrossing: any): void {
    this.selectedRailroadCrossing = railroadCrossing.target.value;
    console.log(this.selectedRailroadCrossing?.fld_naam_ramses);
  }
}

export interface RailroadCrossing {
  fld_naam_ramses: string;
  fld_actief_passief: string;
  type_pn: string;
  fld_geo_x: string;
  fld_geo_y: string;
  fld_postcode_en_gemeente: string;
  position_du_passage_a_niveau: RailroadCrossingPosition;
  type_lc: string;
}

export interface RailroadCrossingPosition {
  lon: number;
  lat: number;
}

