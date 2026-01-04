import { Component, input } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-property-card',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{title()}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        {{price().toFixed(2)}} for 1 night
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class PropertyCard {
  title = input<string>('');
  price = input<number>(0);
}
