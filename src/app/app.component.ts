import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  oddNumbers: number[] = []
  evenNumbers: number[] = []

  onStartGame(secCounted: number) {

    if (secCounted % 2 === 0) {
      this.evenNumbers.push(secCounted);
    } else {
      this.oddNumbers.push(secCounted);
    }


  }
}
