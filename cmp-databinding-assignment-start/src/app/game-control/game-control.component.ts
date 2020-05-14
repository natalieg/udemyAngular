import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberFired = new EventEmitter<number>();
  mynumber = 0;
  ref =  null;

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.ref = setInterval(()=>{
     this.numberFired.emit(this.mynumber + 1);
     this.mynumber ++;
    }, 1000);
  }

  stopGame(){
    clearInterval(this.ref);
  }


}
