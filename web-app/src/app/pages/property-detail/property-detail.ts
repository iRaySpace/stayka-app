import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatChip } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  imports: [MatButton, MatIcon, MatChip, MatDivider],
  template: `
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <!-- Header with Back Button -->
      <div class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-[1400px] mx-auto px-6 py-4">
          <button 
            mat-button 
            (click)="goBack()"
            class="!text-gray-700 hover:!bg-gray-100"
          >
            <mat-icon class="mr-2">arrow_back</mat-icon>
            Back to Listings
          </button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-[1400px] mx-auto px-6 py-8">
        <!-- Image Gallery -->
        <div class="grid grid-cols-4 gap-3 mb-8 rounded-2xl overflow-hidden">
          <div class="col-span-2 row-span-2 relative group">
            <img 
              src="https://material.angular.dev/assets/img/examples/shiba2.jpg" 
              alt="Main property image"
              class="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute top-4 left-4">
              <mat-chip class="!bg-blue-600 !text-white !font-semibold">Featured</mat-chip>
            </div>
            <button class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
              <mat-icon class="text-red-500">favorite_border</mat-icon>
            </button>
          </div>
          <div class="relative group overflow-hidden">
            <img 
              src="https://material.angular.dev/assets/img/examples/shiba2.jpg" 
              alt="Property image 2"
              class="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="relative group overflow-hidden">
            <img 
              src="https://material.angular.dev/assets/img/examples/shiba2.jpg" 
              alt="Property image 3"
              class="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="relative group overflow-hidden">
            <img 
              src="https://material.angular.dev/assets/img/examples/shiba2.jpg" 
              alt="Property image 4"
              class="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="relative group overflow-hidden">
            <img 
              src="https://material.angular.dev/assets/img/examples/shiba2.jpg" 
              alt="Property image 5"
              class="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-colors">
              <span class="text-white font-semibold text-lg">+5 more</span>
            </div>
          </div>
        </div>

        <!-- Property Details Grid -->
        <div class="grid grid-cols-3 gap-8">
          <!-- Left Column - Main Details -->
          <div class="col-span-2 space-y-6">
            <!-- Title and Location -->
            <div>
              <h1 class="text-4xl font-bold text-gray-900 mb-3">Loft in Baguio</h1>
              <div class="flex items-center gap-2 text-gray-600 mb-4">
                <mat-icon class="text-red-500">location_on</mat-icon>
                <span class="text-lg">Baguio City, Philippines</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1">
                  <mat-icon class="text-yellow-500">star</mat-icon>
                  <span class="font-semibold text-lg">4.8</span>
                  <span class="text-gray-500">(124 reviews)</span>
                </div>
                <span class="text-gray-300">•</span>
                <span class="text-gray-600">Superhost</span>
              </div>
            </div>

            <mat-divider></mat-divider>

            <!-- Property Features -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Property Features</h2>
              <div class="grid grid-cols-3 gap-6">
                <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div class="bg-blue-600 p-3 rounded-lg">
                    <mat-icon class="text-white">bed</mat-icon>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-gray-900">2</div>
                    <div class="text-sm text-gray-600">Bedrooms</div>
                  </div>
                </div>
                <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div class="bg-purple-600 p-3 rounded-lg">
                    <mat-icon class="text-white">bathtub</mat-icon>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-gray-900">1</div>
                    <div class="text-sm text-gray-600">Bathrooms</div>
                  </div>
                </div>
                <div class="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div class="bg-green-600 p-3 rounded-lg">
                    <mat-icon class="text-white">square_foot</mat-icon>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-gray-900">45</div>
                    <div class="text-sm text-gray-600">m² Area</div>
                  </div>
                </div>
              </div>
            </div>

            <mat-divider></mat-divider>

            <!-- Description -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
              <p class="text-gray-700 leading-relaxed text-lg">
                Experience the charm of Baguio in this beautifully designed loft. Perfect for couples or small families, 
                this property offers a cozy retreat with modern amenities and stunning views of the city. Located in a 
                prime area, you'll have easy access to local attractions, restaurants, and shopping centers.
              </p>
              <p class="text-gray-700 leading-relaxed text-lg mt-4">
                The space features high ceilings, large windows for natural light, and a fully equipped kitchen. 
                Enjoy your morning coffee on the private balcony while taking in the cool mountain breeze.
              </p>
            </div>

            <mat-divider></mat-divider>

            <!-- Amenities -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <mat-icon class="text-blue-600">wifi</mat-icon>
                  <span class="text-gray-700">Free WiFi</span>
                </div>
                <div class="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <mat-icon class="text-blue-600">local_parking</mat-icon>
                  <span class="text-gray-700">Free Parking</span>
                </div>
                <div class="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <mat-icon class="text-blue-600">kitchen</mat-icon>
                  <span class="text-gray-700">Full Kitchen</span>
                </div>
                <div class="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <mat-icon class="text-blue-600">tv</mat-icon>
                  <span class="text-gray-700">Smart TV</span>
                </div>
                <div class="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <mat-icon class="text-blue-600">ac_unit</mat-icon>
                  <span class="text-gray-700">Air Conditioning</span>
                </div>
                <div class="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <mat-icon class="text-blue-600">balcony</mat-icon>
                  <span class="text-gray-700">Balcony</span>
                </div>
              </div>
            </div>

            <mat-divider></mat-divider>

            <!-- Location Map Placeholder -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <div class="bg-gray-200 rounded-xl h-80 flex items-center justify-center border border-gray-300">
                <div class="text-center">
                  <mat-icon class="text-gray-400 !text-6xl !w-16 !h-16 mb-2">map</mat-icon>
                  <p class="text-gray-600">Map view coming soon</p>
                  <p class="text-sm text-gray-500 mt-1">Baguio City, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Booking Card -->
          <div class="col-span-1">
            <div class="sticky top-6">
              <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <!-- Price -->
                <div class="mb-6">
                  <div class="flex items-baseline gap-2 mb-1">
                    <span class="text-4xl font-bold text-blue-600">₱2,727</span>
                    <span class="text-gray-600">/ night</span>
                  </div>
                  <div class="flex items-center gap-1 text-sm">
                    <mat-icon class="text-yellow-500 !text-base !w-4 !h-4">star</mat-icon>
                    <span class="font-semibold">4.8</span>
                    <span class="text-gray-500">(124 reviews)</span>
                  </div>
                </div>

                <!-- Check-in/Check-out -->
                <div class="mb-4 border border-gray-300 rounded-xl overflow-hidden">
                  <div class="grid grid-cols-2 divide-x divide-gray-300">
                    <div class="p-3">
                      <label class="text-xs font-semibold text-gray-700 uppercase">Check-in</label>
                      <input 
                        type="date" 
                        class="w-full mt-1 border-0 focus:outline-none text-sm"
                      />
                    </div>
                    <div class="p-3">
                      <label class="text-xs font-semibold text-gray-700 uppercase">Check-out</label>
                      <input 
                        type="date" 
                        class="w-full mt-1 border-0 focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div class="p-3 border-t border-gray-300">
                    <label class="text-xs font-semibold text-gray-700 uppercase">Guests</label>
                    <select class="w-full mt-1 border-0 focus:outline-none text-sm">
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                    </select>
                  </div>
                </div>

                <!-- Reserve Button -->
                <button 
                  mat-raised-button 
                  color="primary"
                  class="w-full !py-4 !text-lg !font-semibold !mb-4"
                >
                  Reserve
                </button>

                <p class="text-center text-sm text-gray-600 mb-4">You won't be charged yet</p>

                <!-- Price Breakdown -->
                <div class="space-y-3 pt-4 border-t border-gray-200">
                  <div class="flex justify-between text-gray-700">
                    <span class="underline">₱2,727 × 5 nights</span>
                    <span>₱13,635</span>
                  </div>
                  <div class="flex justify-between text-gray-700">
                    <span class="underline">Service fee</span>
                    <span>₱1,909</span>
                  </div>
                  <mat-divider></mat-divider>
                  <div class="flex justify-between font-bold text-lg text-gray-900">
                    <span>Total</span>
                    <span>₱15,544</span>
                  </div>
                </div>
              </div>

              <!-- Contact Host -->
              <div class="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900">Hosted by John Doe</h3>
                    <p class="text-sm text-gray-600">Superhost · 3 years hosting</p>
                  </div>
                </div>
                <button 
                  mat-stroked-button 
                  class="w-full !border-blue-600 !text-blue-600 hover:!bg-blue-50"
                >
                  <mat-icon class="mr-2">message</mat-icon>
                  Contact Host
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: `
    :host {
      display: block;
    }

    .grid {
      display: grid;
    }

    .grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .col-span-1 {
      grid-column: span 1 / span 1;
    }

    .col-span-2 {
      grid-column: span 2 / span 2;
    }

    .row-span-2 {
      grid-row: span 2 / span 2;
    }

    .gap-1 {
      gap: 0.25rem;
    }

    .gap-2 {
      gap: 0.5rem;
    }

    .gap-3 {
      gap: 0.75rem;
    }

    .gap-4 {
      gap: 1rem;
    }

    .gap-6 {
      gap: 1.5rem;
    }

    .gap-8 {
      gap: 2rem;
    }

    img {
      height: 100%;
      min-height: 200px;
    }

    .divide-x > * + * {
      border-left-width: 1px;
    }

    .divide-gray-300 > * + * {
      border-color: #d1d5db;
    }
  `,
})
export default class PropertyDetail {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/property-listing']);
  }
}
