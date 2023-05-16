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

  constructor(http: HttpClient, private railroadCrossingsService: RailroadCrossingsService) { }

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

  //Called when import button is clicked.
  fetchData() {
    this.railroadCrossingsService.fetchData().subscribe({
      next: (railroadCrossings) => {
        this.railroadCrossings = railroadCrossings;
        //Operation to fill database with reponse data
        //Call API to fill database
        this.railroadCrossingsService.fillDatabase(railroadCrossings).subscribe(
          () => {
            console.log('La base de données a été remplie avec succès !');
          },
          (error) => {
            console.error('Une erreur s\'est produite lors du remplissage de la base de données :', error);
          }
        );
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}

export interface RailroadCrossing {
  id: number,
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

