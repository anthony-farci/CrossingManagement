import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public railroadCrossings: RailroadCrossing[] = [];

  constructor(http: HttpClient) {
    http.get<RailroadCrossing[]>("https://opendata.infrabel.be/api/v2/catalog/datasets/geoow/exports/json?limit=-1&offset=0&timezone=UTC").subscribe(result => {
      this.railroadCrossings = result;
    }, error => console.error(error));
  }
}

interface RailroadCrossing {
  fld_naam_ramses: string;
  fld_actief_passief: string;
  type_pn: string;
  fld_geo_x: string;
  fld_geo_y: string;
  fld_postcode_en_gemeente: string;
  position_du_passage_a_niveau: RailroadCrossingPosition;
  type_lc: string;
}

interface RailroadCrossingPosition {
  lon: number;
  lat: number;
}

