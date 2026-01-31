import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { PropertyCard } from "../../layout/property-card/property-card";

@Component({
  selector: 'app-property-listing',
  imports: [MatButton, MatIcon, MatCheckbox, PropertyCard],
  template: `
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Search Section -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div class="max-w-[1200px] mx-auto px-6 py-12">
        <h1 class="text-4xl font-bold text-white mb-6">Find Your Perfect Stay</h1>
        <div class="flex gap-3 max-w-2xl">
          <input 
            type="text"
            placeholder="Search by location, property name..." 
            class="flex-1 px-6 py-4 rounded-lg border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
          />
          <button 
            mat-raised-button 
            class="!bg-white !text-blue-600 !px-8 !py-4 !text-lg !font-semibold hover:!bg-gray-50 !shadow-md"
          >
            <mat-icon class="mr-2">search</mat-icon>
            Search
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="max-w-[1200px] mx-auto px-6 py-8 flex gap-8">
      <!-- Filters Sidebar -->
      <aside class="w-1/4 min-w-[250px]">
        <div class="sticky top-6 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <mat-icon class="mr-2 text-blue-600">tune</mat-icon>
            Filters
          </h2>
          
          <!-- Price Range -->
          <div class="mb-8">
            <h3 class="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">Price Range</h3>
            <div class="space-y-3">
              <input 
                type="number" 
                placeholder="Min Price" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="number" 
                placeholder="Max Price" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button 
              mat-raised-button 
              color="primary"
              class="w-full !mt-4 !py-2"
            >
              Apply
            </button>
          </div>

          <!-- Bedrooms -->
          <div class="mb-6">
            <h3 class="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">Bedrooms</h3>
            <div class="space-y-3">
              <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <mat-checkbox class="mr-3" />
                <span class="text-gray-700">1 Bedroom</span>
              </label>
              <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <mat-checkbox class="mr-3" />
                <span class="text-gray-700">2 Bedrooms</span>
              </label>
              <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <mat-checkbox class="mr-3" />
                <span class="text-gray-700">3+ Bedrooms</span>
              </label>
            </div>
          </div>

          <!-- Property Type -->
          <div>
            <h3 class="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">Property Type</h3>
            <div class="space-y-3">
              <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <mat-checkbox class="mr-3" />
                <span class="text-gray-700">Apartment</span>
              </label>
              <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <mat-checkbox class="mr-3" />
                <span class="text-gray-700">Condo</span>
              </label>
              <label class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <mat-checkbox class="mr-3" />
                <span class="text-gray-700">Loft</span>
              </label>
            </div>
          </div>
        </div>
      </aside>

      <!-- Property Listings -->
      <div class="flex-1">
        <div class="mb-6 flex justify-between items-center">
          <h2 class="text-2xl font-bold text-gray-800">
            Available Properties
            <span class="text-lg font-normal text-gray-500 ml-2">(4 results)</span>
          </h2>
          <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Sort by: Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li 
            class="property-card-wrapper cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
            (click)="navigateToDetail()"
          >
            <app-property-card
              title="Loft in Baguio"
              [price]="2727"
            />
          </li>
          <li 
            class="property-card-wrapper cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
            (click)="navigateToDetail()"
          >
            <app-property-card
              title="Condo in Cabinet Hill-Teacher's Camp"
              [price]="2414"
            />
          </li>
          <li 
            class="property-card-wrapper cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
            (click)="navigateToDetail()"
          >
            <app-property-card
              title="Place to stay in Baguio"
              [price]="1998"
            />
          </li>
          <li 
            class="property-card-wrapper cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
            (click)="navigateToDetail()"
          >
            <app-property-card
              title="Apartment in General Luna Upper"
              [price]="2707"
            />
          </li>
        </ul>
      </div>
    </section>
  </main> 
  `,
  styles: `
    :host {
      display: block;
    }

    .property-card-wrapper {
      position: relative;
      overflow: hidden;
    }

    .property-card-wrapper::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(59, 130, 246, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      border-radius: 0.5rem;
    }

    .property-card-wrapper:hover::after {
      opacity: 1;
    }
  `,
})
export default class PropertyListing {
  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/property-detail']);
  }
}
