import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//importar servicio players
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = new FormControl('');
  
  constructor() { }

  ngOnInit() {
  }

  savePlayers(){

  }

}
