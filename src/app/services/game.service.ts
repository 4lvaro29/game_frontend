import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class GameService {
  uri= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(`${this.uri}/api/v1/games/`);
  }
  
  addGame(player_1_name:string, player_2_name:string){
    const game = {
       player_1_name,
       player_2_name,
    }
    return this.http.post(`${this.uri}/api/v1/games`,game);
  };

}

