import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RailroadCrossing } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class RailroadCrossingsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllRailroadCrossings(): Observable<RailroadCrossing[]> {
    return this.http.get<RailroadCrossing[]>(this.baseApiUrl + '/api/Railroad');
  }
}
