import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-group-control',
  templateUrl: './group-control.component.html',
  styleUrls: ['./group-control.component.css']
})
export class GroupControlComponent implements OnInit {

  @Output() secCount = 0;
  interval;

  constructor() {


  }

  ngOnInit(): void {
  }

  onStartGame($event) {
    this.interval = setInterval(() => {
      this.secCount++;
    }, 1000)
  }

  onEndGame($event) {
    clearInterval(this.interval);
  }

}
