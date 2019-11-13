import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[GameService]
})
export class MainComponent implements OnInit {
  players_form;
  public player_1_name: string;
  public player_2_name: string;
  public players=[]
  public round= 0;
  public showDiv1=false;
  public id:any
  public scores = [0 , 0];
  public movements = [
    'rock',
    'paper',
    'scissors'
  ];
  public player_1_movement = -1;
  public player_2_movement  = -1;
  public loading= false; 
  public isResultShow = false;
  public theResult = 0;
  
  constructor(private gameService: GameService,
              private toastr:ToastrService,
              private formBuilder: FormBuilder) {
     
  }

  ngOnInit():void {
    this.players_form= this.formBuilder.group({
      player_1_name: '',
      player_2_name: '',
    });
    this.gameService.getGames().subscribe((games)=>{
      console.log(games);
    })
  };
  
  movementPick( move: number): void {
    this.player_1_movement = move;
    setTimeout( () => {
      this.loading = false;
      const randomNum =  Math.floor(Math.random() * 3 ) ;
      this.player_2_movement = randomNum;
      this.checkResult();
      this.isResultShow = true;
    },  Math.floor(Math.random()  * 500 ) +200);
  }

  reset(): void {
    this.scores = [0,0];
   }
   

   nextRound(index:number){
     this.round = index;
    

   }

   checkResult(): void {
    const player_1_move = this.player_1_movement;
    const player_2_move = this.player_2_movement;
  
    if(player_1_move ==  player_2_move)
     {
     this.theResult = 2;
   }
  
     else if ( (player_1_move - player_2_move + 3)% 3 == 1)    {
       // YOU WIN
       this.theResult = 0;
       this.scores[0] = this.scores[0]+1;
     }
     else{
       // YOU LOSE
       this.theResult = 1;
         this.scores[1] = this.scores[1]+1;
     }

    }

  startGame(game){
    console.log(game);
    if(game.player_1_name && game.player_2_name){
     this.gameService.addGame(game.player_1_name,game.player_2_name);
      this.showDiv1=true;
      return this.toastr.success('GO!','lets play');
    }else{
  
    return this.toastr.error('Try again','both must enter their names!')
      
    }
    
  }

}
