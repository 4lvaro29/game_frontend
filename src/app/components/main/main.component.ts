import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[GameService]
})
export class MainComponent implements OnInit {
  name = new FormControl('');
  
  constructor( private gameService: GameService) { 
    
   
  }

  ngOnInit():void {
    this.gameService.getPlayers().subscribe((players)=>{
      console.log(players);
    })
    
      
  };
    
  

  savePlayers(){

  }

}
