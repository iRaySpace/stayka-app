import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { PropertyCard } from "../../layout/property-card/property-card";

@Component({
  selector: 'app-property-listing',
  imports: [MatButton, PropertyCard],
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
    <section class="max-w-[1100px] mx-auto flex">
      <div class="w-1/4 pl">
        <fieldset>
          <legend>Price Range</legend>
          <div>
            <input type="text" placeholder="MIN" />
            <input type="text" placeholder="MAX" />
          </div>
          <button>Apply</button>
        </fieldset>
        <fieldset>
          <legend>Bedroom</legend>
          <div>
            <input type="checkbox" />
            <span>1 Bedroom</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>2 Bedrooms</span>
          </div>
        </fieldset>
      </div>
      <div class="w-3/4">
        <div>
          <ul class="grid grid-cols-3 gap-2">
            <li>
              <a href="#">
                <app-property-card
                  title="Loft in Baguio"
                  [price]="2727"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <app-property-card
                  title="Condo in Cabinet Hill-Teacher's Camp"
                  [price]="2414"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <app-property-card
                  title="Place to stay in Baguio"
                  [price]="1998"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <app-property-card
                  title="Apartment in General Luna Upper"
                  [price]="2707"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main> 
  `,
  styles: ``,
})
export default class PropertyListing {
}
