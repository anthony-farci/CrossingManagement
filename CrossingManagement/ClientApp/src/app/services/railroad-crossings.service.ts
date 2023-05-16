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

  addRailroadCrossing(addRailroadCrossingRequest: RailroadCrossing): Observable<RailroadCrossing> {
    return this.http.post<RailroadCrossing>(this.baseApiUrl + '/api/Railroad', addRailroadCrossingRequest);
  }

  getRailroadCrossingById(id: string): Observable<RailroadCrossing> {
    return this.http.get<RailroadCrossing>(this.baseApiUrl + '/api/Railroad/' + id);
  }

  updateRailroadCrossing(id: string, updateRailroadCrossing: RailroadCrossing): Observable<RailroadCrossing> {
    return this.http.put<RailroadCrossing>(this.baseApiUrl + '/api/Railroad/' + id, updateRailroadCrossing);
  }

  deleteRailroadCrossing(id: string): Observable<RailroadCrossing> {
    return this.http.delete<RailroadCrossing>(this.baseApiUrl + '/api/Railroad/' + id);
  }
}
