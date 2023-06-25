import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { player } from './player';

@Injectable({
providedIn: 'root',
})
export class PlayerService {
private apiUrl = 'http://localhost:3000/api/players';

constructor(private http: HttpClient) {}

getPlayers(): Observable<player[]> {
return this.http.get<player[]>(this.apiUrl);
}

getPlayer(id: number): Observable<player> {
return this.http.get<player>(`${this.apiUrl}/${id}`);
}

addPlayer(player: player): Observable<player> {
return this.http.post<player>(this.apiUrl, player);
}

updatePlayer(player: player): Observable<player> {
return this.http.put<player>(`${this.apiUrl}/${player.id}`, player);
}

deletePlayer(id: number): Observable<player> {
return this.http.delete<player>(`${this.apiUrl}/${id}`);
}

getPlayermostRuns(): Observable<player> {
return this.http.get<player>(`${this.apiUrl}/mostRuns`);
}

getPlayermostCatches(): Observable<player> {
return this.http.get<player>(`${this.apiUrl}/mostCatches`);
}

getPlayermaxNumber_of_100s(): Observable<player> {
return this.http.get<player>(`${this.apiUrl}/maxNumber_of_100s`);
}

getPlayersmaxWickets(): Observable<player[]> {
return this.http.get<player[]>(`${this.apiUrl}/maxWickets`);
}

getPlayerMostSacks(): Observable<player> {
return this.http.get<player>(`${this.apiUrl}/mostSacks`);
}
}

