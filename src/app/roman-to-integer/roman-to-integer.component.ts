import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-roman-to-integer',
  templateUrl: './roman-to-integer.component.html',
  styleUrls: ['./roman-to-integer.component.css'],
})
export class RomanToIntegerComponent implements OnInit {
  private input: string;
  private map: Map<string, number>;
  final: number;
  invalid: boolean;
  constructor() {
    this.input = '';
    this.map = new Map();
    this.map.set('I', 1);
    this.map.set('V', 5);
    this.map.set('X', 10);
    this.map.set('L', 50);
    this.map.set('C', 100);
    this.map.set('D', 500);
    this.map.set('M', 1000);
    this.final = -1;
    this.invalid = false;
  }

  ngOnInit(): void {}

  romanToInteger(input: string) {
    input = input.toUpperCase();
    let result = 0;
    for (let i = 1; i < input.length; i++) {
      let prev = input.substring(i - 1, i);
      let current = input.substring(i, i + 1);
      let p = this.map.get(prev);
      if (p === undefined) {
        this.invalid = true;
        break;
      }
      let c = this.map.get(current);
      if (c === undefined) { 
        this.invalid = true;
        break;
      }
      if (prev >= current) result += p;
      else result -= p;
    }
    let final = this.map.get(input.substring(input.length - 1));
    if (final === undefined) final = 0;
    result += final;
    this.final = result;
  }

  reset() {
    this.final = -1;
    this.invalid = false;
  }
}
