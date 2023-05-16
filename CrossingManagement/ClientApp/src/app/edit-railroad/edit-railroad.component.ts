import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RailroadCrossing } from '../home/home.component';
import { RailroadCrossingsService } from '../services/railroad-crossings.service';

@Component({
  selector: 'app-edit-railroad',
  templateUrl: './edit-railroad.component.html',
  styleUrls: ['./edit-railroad.component.css']
})
export class EditRailroadComponent implements OnInit {

  railroadCrossingDetail: RailroadCrossing = {
    id: 0,
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
  }

  constructor(private route: ActivatedRoute, private railroadCrossingsService: RailroadCrossingsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.railroadCrossingsService.getRailroadCrossingById(id).subscribe({
            next: (response) => {
              this.railroadCrossingDetail = response;
            }
          });
        }
      }
    })
  }

  updateRailroadCrossing() {
    this.railroadCrossingsService.updateRailroadCrossing(this.railroadCrossingDetail.id.toString(), this.railroadCrossingDetail)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        }
      });
  }

  deleteRailroadCrossing(id: string) {
    this.railroadCrossingsService.deleteRailroadCrossing(id)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        }
      });
  }
}
