import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbar],
  template: `
    <mat-toolbar class="w-full shadow-md">
      <div class="max-w-[1100px] mx-auto w-full">Stayka</div>
    </mat-toolbar>
  `,
  styles: ``,
})
export class Header {

}
