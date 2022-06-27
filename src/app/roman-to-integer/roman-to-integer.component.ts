import { Component, OnInit } from '@angular/core';
import { ProcessInputService } from '../process-input.service';

@Component({
  selector: 'app-roman-to-integer',
  templateUrl: './roman-to-integer.component.html',
  styleUrls: ['./roman-to-integer.component.css'],
})
export class RomanToIntegerComponent implements OnInit {
  result: string;
  final: number;
  invalid: boolean;
  constructor(private convert : ProcessInputService) {
    this.final = 0;
    this.result = '';
    this.invalid = false;
  }

  ngOnInit(): void {}

  romanToInteger(input: string) {
    this.final = -1;
    this.invalid = false;
    let final = this.convert.romanToInteger(input);
    if (this.convert.invalid) this.invalid = true;
    else this.final = final;
    if (this.invalid) this.result = 'Please enter a valid input!';
    else this.result = 'The result is ' + this.final; 
  }

}
