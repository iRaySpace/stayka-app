import { Component } from '@angular/core';
import { PropertyForm } from "../../layout/property-form/property-form";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-add-property',
  imports: [PropertyForm, MatIcon],
  template: `
    <main class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-rose-50">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="max-w-[1100px] mx-auto px-6 py-12">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-rose-600 rounded-2xl mb-4 shadow-lg">
              <mat-icon class="text-white text-3xl">add_home</mat-icon>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 mb-3">
              List Your Property
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Share your space with travelers from around the world. Fill in the details below to get started.
            </p>
          </div>
        </div>
      </section>

      <!-- Form Section -->
      <section class="form-section py-16">
        <div class="max-w-[1100px] mx-auto px-6">
          <div class="form-card">
            <app-property-form />
          </div>
        </div>
      </section>
    </main>
  `,
  styles: `
    .hero-section {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(244, 63, 94, 0.05) 100%);
      border-bottom: 1px solid rgba(229, 231, 235, 0.8);
    }

    .form-card {
      background: white;
      border-radius: 16px;
      padding: 48px;
      box-shadow: 
        0 1px 3px rgba(0, 0, 0, 0.05),
        0 10px 40px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(229, 231, 235, 0.6);
      transition: all 0.3s ease;
    }

    .form-card:hover {
      box-shadow: 
        0 1px 3px rgba(0, 0, 0, 0.05),
        0 20px 60px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 768px) {
      .form-card {
        padding: 24px;
        border-radius: 12px;
      }
    }
  `,
})
export default class AddProperty {

}
