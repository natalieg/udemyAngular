import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showSecret: boolean = false;
  clickCounter: number = 0;
  clickCountArray = [];

  toggleSecret(){
    let oldStat = this.showSecret;
    this.showSecret = !oldStat;
    this.clickCounter = this.clickCounter + 1;
    this.clickCountArray.push(this.clickCounter);
    console.log(this.clickCountArray)
  }

  getStyle(number){
    return number >= 5  ? '#a6f5ad' : null;
  }

}
