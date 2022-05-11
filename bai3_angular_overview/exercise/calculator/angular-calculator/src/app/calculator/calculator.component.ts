import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator(a: number, b: number, cal: string) {
    switch (cal) {
      case '+':
        return this.result = a + b;
      case '-':
        return this.result = a - b;
      case '*':
        return this.result = a * b;
      case '/':
        if (a == 0 || b == 0) {
          alert("Ko chia dc")
        }else {
          return this.result = a / b;
        }
    }
  }
}
