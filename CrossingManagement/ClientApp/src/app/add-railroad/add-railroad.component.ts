import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RailroadCrossing } from '../home/home.component';
import { RailroadCrossingsService } from '../services/railroad-crossings.service';

@Component({
  selector: 'app-add-railroad',
  templateUrl: './add-railroad.component.html',
  styleUrls: ['./add-railroad.component.css']
})
export class AddRailroadComponent implements OnInit {

  addRailroadCrossingRequest: RailroadCrossing = {
    fld_naam_ramses: '',
    fld_actief_passief: '',
    type_pn: '',
    fld_geo_x: '',
    fld_geo_y: '',
    fld_postcode_en_gemeente: '',
    position_du_passage_a_niveau: {
      lat: 0,
      lon: 0
    },
    type_lc: '',
  };

  constructor(private railroadCrossingsService: RailroadCrossingsService, private router: Router) { }

  ngOnInit(): void {

  }

  addRailroadCrossing() {
    this.railroadCrossingsService.addRailroadCrossing(this.addRailroadCrossingRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        }
      });
  }
}

