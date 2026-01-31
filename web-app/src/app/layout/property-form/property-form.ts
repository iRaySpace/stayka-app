import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix, MatError, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-form',
  imports: [MatFormField, MatLabel, MatInput, MatSelect, MatOption, MatSuffix, MatPrefix, MatButton, MatIcon, ReactiveFormsModule, MatError],
  template: `
    <form [formGroup]="propertyForm" (ngSubmit)="handleSubmit()">
      <!-- Property Information Section -->
      <div class="form-section">
        <div class="section-header">
          <div class="icon-wrapper">
            <mat-icon class="section-icon">home</mat-icon>
          </div>
          <div>
            <h2 class="section-title">Property Information</h2>
            <p class="section-description">Enter relevant information about the property.</p>
          </div>
        </div>
        
        <div class="form-grid">
          <mat-form-field class="col-span-2" appearance="outline">
            <mat-label>Property Title</mat-label>
            <mat-icon matPrefix class="field-icon">title</mat-icon>
            <input matInput placeholder="e.g., Cozy Studio in Downtown" formControlName="title">
            @if (propertyForm.get('title')?.hasError('required')) {
              <mat-error>Title is required</mat-error>
            }
          </mat-form-field>

          <mat-form-field class="col-span-1" appearance="outline">
            <mat-label>Bedrooms</mat-label>
            <mat-icon matPrefix class="field-icon">bed</mat-icon>
            <mat-select formControlName="bedrooms">
              <mat-option [value]="1">1 Bedroom</mat-option>
              <mat-option [value]="2">2 Bedrooms</mat-option>
              <mat-option [value]="3">3 Bedrooms</mat-option>
              <mat-option [value]="4">4 Bedrooms</mat-option>
              <mat-option [value]="5">5+ Bedrooms</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field class="col-span-3" appearance="outline">
            <mat-label>Description</mat-label>
            <textarea 
              matInput 
              formControlName="description" 
              rows="4"
              placeholder="Describe your property, amenities, and what makes it special..."></textarea>
            @if (propertyForm.get('description')?.hasError('required')) {
              <mat-error>Description is required</mat-error>
            }
          </mat-form-field>
        </div>
      </div>

      <!-- Location & Pricing Section -->
      <div class="form-section">
        <div class="section-header">
          <div class="icon-wrapper">
            <mat-icon class="section-icon">location_on</mat-icon>
          </div>
          <div>
            <h2 class="section-title">Location & Pricing</h2>
            <p class="section-description">Set your property location and nightly rate.</p>
          </div>
        </div>

        <div class="form-grid">
          <mat-form-field class="col-span-2" appearance="outline">
            <mat-label>Location</mat-label>
            <mat-icon matPrefix class="field-icon">place</mat-icon>
            <input matInput placeholder="e.g., Baguio City, Philippines" formControlName="location">
            @if (propertyForm.get('location')?.hasError('required')) {
              <mat-error>Location is required</mat-error>
            }
          </mat-form-field>

          <mat-form-field class="col-span-1" appearance="outline">
            <mat-label>Price per Night</mat-label>
            <mat-icon matPrefix class="field-icon">payments</mat-icon>
            <input matInput type="number" class="text-right" placeholder="0" formControlName="price">
            <span matTextSuffix class="price-suffix">.00 ₱</span>
            @if (propertyForm.get('price')?.hasError('min')) {
              <mat-error>Price must be at least ₱{{propertyForm.get('price')?.getError('min').min}}</mat-error>
            }
          </mat-form-field>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="action-section">
        <div class="button-group">
          <button type="submit" mat-flat-button class="submit-button">
            <mat-icon>add_circle</mat-icon>
            Add Property
          </button>
        </div>
      </div>
    </form>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .form-section {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .section-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 8px;
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
      flex-shrink: 0;
    }

    .section-icon {
      color: white;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }

    .section-title {
      font-size: 20px;
      font-weight: 600;
      color: #1f2937;
      margin: 0;
      line-height: 1.4;
    }

    .section-description {
      font-size: 14px;
      color: #6b7280;
      margin: 4px 0 0 0;
      line-height: 1.5;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .col-span-1 {
      grid-column: span 1;
    }

    .col-span-2 {
      grid-column: span 2;
    }

    .col-span-3 {
      grid-column: span 3;
    }

    .field-icon {
      color: #9ca3af;
      margin-right: 8px;
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .description-icon {
      align-self: flex-start;
      margin-top: 8px;
    }

    .price-suffix {
      font-weight: 600;
      color: #2563eb;
      margin-left: 4px;
    }

    .action-section {
      margin-top: 8px;
    }

    .button-group {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    .cancel-button {
      padding: 0 24px;
      height: 44px;
      border-radius: 8px;
      font-weight: 500;
      border-color: #e5e7eb;
      color: #6b7280;
      transition: all 0.2s ease;
    }

    .cancel-button:hover {
      background-color: #f9fafb;
      border-color: #d1d5db;
    }

    .cancel-button mat-icon {
      margin-right: 4px;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .submit-button {
      padding: 0 32px;
      height: 44px;
      border-radius: 8px;
      font-weight: 600;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      transition: all 0.3s ease;
    }

    .submit-button:hover {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
      transform: translateY(-1px);
    }

    .submit-button mat-icon {
      margin-right: 6px;
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .col-span-1,
      .col-span-2,
      .col-span-3 {
        grid-column: span 1;
      }

      .section-header {
        gap: 12px;
      }

      .icon-wrapper {
        width: 40px;
        height: 40px;
      }

      .section-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }

      .section-title {
        font-size: 18px;
      }

      .button-group {
        flex-direction: column-reverse;
      }

      .cancel-button,
      .submit-button {
        width: 100%;
      }
    }

    /* Material Form Field Customization */
    ::ng-deep .mat-mdc-form-field {
      width: 100%;
    }

    ::ng-deep .mat-mdc-text-field-wrapper {
      background-color: #f9fafb;
      border-radius: 8px;
    }

    ::ng-deep .mat-mdc-form-field:hover .mat-mdc-text-field-wrapper {
      background-color: #f3f4f6;
    }

    ::ng-deep .mat-mdc-form-field.mat-focused .mat-mdc-text-field-wrapper {
      background-color: white;
    }
  `,
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
