import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
