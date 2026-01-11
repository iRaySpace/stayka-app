import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatDivider } from '@angular/material/divider';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-property-form',
  imports: [MatFormField, MatLabel, MatInput, MatSelect, MatOption, MatSuffix, MatDivider, MatAnchor],
  template: `
    <form>
      <div class="grid grid-cols-3 gap-10">
        <div>
          <h2 class="font-semibold text-gray-900">Property Information</h2>
          <p class="text-sm mt-1 text-gray-600">Enter relevant information about the property.</p>
        </div>
        <div class="col-span-2">
          <div class="grid grid-cols-6 gap-4">
            <mat-form-field class="col-span-3" appearance="outline">
              <mat-label>Title</mat-label>
              <input matInput placeholder="Title">
            </mat-form-field>
            <mat-form-field class="col-span-3" appearance="outline">
              <mat-label>Room size (Bedrooms)</mat-label>
              <mat-select>
                <mat-option value="1">1</mat-option>
                <mat-option value="2">2</mat-option>
                <mat-option value="3">3</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field class="col-span-6" appearance="outline">
              <mat-label>Description</mat-label>
              <textarea matInput></textarea>
            </mat-form-field>
            <mat-form-field class="col-span-4" appearance="outline">
              <mat-label>Location</mat-label>
              <input matInput placeholder="Location">
            </mat-form-field>
            <mat-form-field class="col-span-2" appearance="outline">
              <mat-label>Price</mat-label>
              <input matInput type="number" class="text-right" placeholder="0">
              <span matTextSuffix>.00</span>
            </mat-form-field>
          </div>
        </div>
      </div>
      <div class="my-6">
        <mat-divider></mat-divider>
      </div>
      <div class="flex justify-end">
        <button type="submit" matButton="filled">Add Property</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class PropertyForm {

}
