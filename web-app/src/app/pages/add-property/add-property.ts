import { Component } from '@angular/core';

@Component({
  selector: 'app-add-property',
  imports: [],
  template: `
    <main>
      <section class="max-w-[1100px] mx-auto">
        <div>Add new property</div>
        <form>
          <div>
            <label>Title</label>
            <input type="text" />
          </div>
          <div>
            <label>Description</label>
            <input type="text" />
          </div>
          <div>
            <label>Location</label>
            <input type="text" />
          </div>
          <div>
            <label>Price</label>
            <input type="number" step="0.01" />
          </div>
          <div>
            <label>Bedrooms</label>
            <input type="number" step="1" />
          </div>
          <button>Submit</button>
        </form>
      </section>
    </main>
  `,
  styles: ``,
})
export default class AddProperty {

}
