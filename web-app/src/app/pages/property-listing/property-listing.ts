import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-property-listing',
  imports: [MatButton],
  template: `
  <main>
    <section class="bg-gray-100">
      <div class="max-w-[1100px] mx-auto">
        <div>
          <input placeholder="Search property" />
          <button matButton="filled">
            Search
          </button>
        </div>
      </div>
    </section>
  </main> 
  `,
  styles: ``,
})
export default class PropertyListing {
}
