import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProcessInputService {
  private map: Map<string, number>;
  final: number;
  invalid: boolean;
  constructor() {
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

  romanToInteger(input: string) {
    this.invalid = false;
    this.final = -1;
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
    if (final === undefined) {
      final = 0;
      this.invalid = true;
    }
    result += final;
    return result;
  }
}
