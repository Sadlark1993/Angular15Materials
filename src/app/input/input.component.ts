import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  foods = [
    {
      value: 1,
      viewValue: 'Banana'
    },
    {
      value: 2,
      viewValue: 'Apple'
    },
    {
      value: 3,
      viewValue: 'Avocado'
    },
    {
      value: 4,
      viewValue: 'Pineapple'
    },
  ];
  selected: number = 2;

  get selectedFruit(): string {
    return this.foods.find(v => v.value === this.selected)!.viewValue;
  }
}
