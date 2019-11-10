import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
//importar servicio players
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = new FormControl('');
  
  // constructor(private gameService: GameService, http: HttpClient) { }

  ngOnInit() {
    // this.gameService.getPlayers().subscribe((players) =>{
    //   console.log(players);
    // }) 
  }

  savePlayers(){

  }

}
