import { Component } from '@angular/core';
import { PropertyForm } from "../../layout/property-form/property-form";

@Component({
  selector: 'app-add-property',
  imports: [PropertyForm],
  template: `
    <main>
      <section class="max-w-[1100px] mx-auto pt-6">
        <app-property-form />
      </section>
    </main>
  `,
  styles: ``,
})
export default class AddProperty {

}
