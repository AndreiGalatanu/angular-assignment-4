import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-group-control',
  templateUrl: './group-control.component.html',
  styleUrls: ['./group-control.component.css']
})
export class GroupControlComponent implements OnInit {

  secCount = 0;
  interval;

  @Output() timerStart = new EventEmitter<number>();
  @Output() timerStop = new EventEmitter();
  constructor() {


  }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.timerStart.emit(this.secCount + 1);
      this.secCount++;
    }, 1000)
  }

  onEndGame() {
    clearInterval(this.interval)
  }

}
