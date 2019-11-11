import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[GameService]
})
export class MainComponent implements OnInit {
  name = new FormControl('');
  public player_1_name: any
  public player_2_name: any
  public game_id:any

  constructor( private gameService: GameService,
              private toastr:ToastrService) { 
    
   
  }

  ngOnInit():void {
    this.gameService.getGames().subscribe((games)=>{
      console.log(games);
      
    })
   
      
  };
    
  showSuccess() {
    this.toastr.success('HOLA MAMA', 'HOLA MAMA!');
  }
  startGame(){
    if(this.player_1_name && this.player_2_name){
      // this.gameService.addGame({
      
      // })
      console.log(this.gameService);

    }else{
      let toastError: string;
      return this.toastr.error(toastError)
      
    }
    
  }

}
