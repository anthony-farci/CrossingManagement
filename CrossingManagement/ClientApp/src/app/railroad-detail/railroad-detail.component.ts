import { Component, Input } from '@angular/core';
import { RailroadCrossing } from '../home/home.component';

@Component({
  selector: 'app-railroad-detail',
  templateUrl: './railroad-detail.component.html',
  styleUrls: ['./railroad-detail.component.css']
})
export class RailroadDetailComponent {
  @Input() railroadCrossing?: RailroadCrossing;
}
