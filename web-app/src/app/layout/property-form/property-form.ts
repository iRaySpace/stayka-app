import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatDivider } from '@angular/material/divider';
import { MatAnchor } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-form',
  imports: [MatFormField, MatLabel, MatInput, MatSelect, MatOption, MatSuffix, MatDivider, MatAnchor, ReactiveFormsModule, MatError],
  template: `
    <form [formGroup]="propertyForm" (ngSubmit)="handleSubmit()">
      <div class="grid grid-cols-3 gap-10">
        <div>
          <h2 class="font-semibold text-gray-900">Property Information</h2>
          <p class="text-sm mt-1 text-gray-600">Enter relevant information about the property.</p>
        </div>
        <div class="col-span-2">
          <div class="grid grid-cols-6 gap-4">
            <mat-form-field class="col-span-3" appearance="outline">
              <mat-label>Title</mat-label>
              <input matInput placeholder="Title" formControlName="title">
              @if (propertyForm.get('title')?.hasError('required')) {
                <mat-error>Title is required</mat-error>
              }
            </mat-form-field>
            <mat-form-field class="col-span-3" appearance="outline">
              <mat-label>Room size (Bedrooms)</mat-label>
              <mat-select formControlName="bedrooms">
                <mat-option [value]="1">1</mat-option>
                <mat-option [value]="2">2</mat-option>
                <mat-option [value]="3">3</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field class="col-span-6" appearance="outline">
              <mat-label>Description</mat-label>
              <textarea matInput formControlName="description"></textarea>
              @if (propertyForm.get('description')?.hasError('required')) {
                <mat-error>Description is required</mat-error>
              }
            </mat-form-field>
            <mat-form-field class="col-span-4" appearance="outline">
              <mat-label>Location</mat-label>
              <input matInput placeholder="Location" formControlName="location">
              @if (propertyForm.get('location')?.hasError('required')) {
                <mat-error>Location is required</mat-error>
              }
            </mat-form-field>
            <mat-form-field class="col-span-2" appearance="outline">
              <mat-label>Price</mat-label>
              <input matInput type="number" class="text-right" placeholder="0" formControlName="price">
              <span matTextSuffix>.00</span>
              @if (propertyForm.get('price')?.hasError('min')) {
                <mat-error>Price must be at least {{propertyForm.get('price')?.getError('min').min}}</mat-error>
              }
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
  propertyForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    bedrooms: new FormControl(1),
    description: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.min(100.00)]),
  });
  handleSubmit() {
  }
}
