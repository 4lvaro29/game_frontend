import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameService {
  uri= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get(`${this.uri}/api/v1/players`);
  }

}

