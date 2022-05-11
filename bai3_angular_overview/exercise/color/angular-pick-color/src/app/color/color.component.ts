import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  r = 0;
  g = 0;
  b = 0;
  constructor() { }

  ngOnInit(): void {
  }
  rgb() {
    let styles = {
      'background-color': 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')',
    };
    return styles;

  }
}
