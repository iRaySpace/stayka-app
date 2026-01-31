import { Component, input } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardImage } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatChip } from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-property-card',
  imports: [MatCard, MatCardContent, MatCardImage, MatIcon, MatChip],
  template: `
    <mat-card class="property-card" appearance="outlined">
      <div class="image-container">
        <img 
          mat-card-image 
          src="https://material.angular.dev/assets/img/examples/shiba2.jpg" 
          alt="{{title()}}" 
          class="property-image"
        />
        <div class="image-overlay">
          <mat-icon class="favorite-icon">favorite_border</mat-icon>
        </div>
        <div class="featured-badge">
          <mat-chip class="!bg-blue-600 !text-white !font-semibold !text-xs">Featured</mat-chip>
        </div>
      </div>
      
      <mat-card-content class="card-content">
        <div class="property-info">
          <h3 class="property-title">{{title()}}</h3>
          
          <div class="property-details">
            <div class="detail-item">
              <mat-icon class="detail-icon">bed</mat-icon>
              <span>2 Beds</span>
            </div>
            <div class="detail-item">
              <mat-icon class="detail-icon">bathtub</mat-icon>
              <span>1 Bath</span>
            </div>
            <div class="detail-item">
              <mat-icon class="detail-icon">square_foot</mat-icon>
              <span>45 m²</span>
            </div>
          </div>

          <div class="location">
            <mat-icon class="location-icon">location_on</mat-icon>
            <span>Baguio City, Philippines</span>
          </div>

          <div class="rating">
            <mat-icon class="star-icon">star</mat-icon>
            <span class="rating-value">4.8</span>
            <span class="rating-count">(124 reviews)</span>
          </div>

          <div class="price-section">
            <div class="price">
              <span class="currency">₱</span>
              <span class="amount">{{price().toFixed(2)}}</span>
            </div>
            <span class="price-label">per night</span>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .property-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: 12px !important;
      transition: all 0.3s ease;
      border: 1px solid #e5e7eb !important;
    }

    .property-card:hover {
      border-color: #3b82f6 !important;
    }

    .image-container {
      position: relative;
      overflow: hidden;
      height: 220px;
    }

    .property-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .property-card:hover .property-image {
      transform: scale(1.08);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      right: 0;
      padding: 12px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .property-card:hover .image-overlay {
      opacity: 1;
    }

    .favorite-icon {
      background: white;
      border-radius: 50%;
      padding: 8px;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
      color: #ef4444;
    }

    .favorite-icon:hover {
      transform: scale(1.1);
      background: #fef2f2;
    }

    .featured-badge {
      position: absolute;
      top: 12px;
      left: 12px;
    }

    .card-content {
      padding: 16px !important;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .property-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .property-title {
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
      margin: 0;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      min-height: 50px;
    }

    .property-details {
      display: flex;
      gap: 16px;
      padding: 8px 0;
      border-top: 1px solid #f3f4f6;
      border-bottom: 1px solid #f3f4f6;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 13px;
      color: #6b7280;
    }

    .detail-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: #9ca3af;
    }

    .location {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #6b7280;
      font-size: 14px;
    }

    .location-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: #ef4444;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .star-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: #fbbf24;
    }

    .rating-value {
      font-weight: 600;
      color: #1f2937;
      font-size: 14px;
    }

    .rating-count {
      color: #9ca3af;
      font-size: 13px;
    }

    .price-section {
      display: flex;
      align-items: baseline;
      gap: 6px;
      margin-top: auto;
      padding-top: 8px;
    }

    .price {
      display: flex;
      align-items: baseline;
      gap: 2px;
    }

    .currency {
      font-size: 18px;
      font-weight: 700;
      color: #2563eb;
    }

    .amount {
      font-size: 24px;
      font-weight: 700;
      color: #2563eb;
    }

    .price-label {
      color: #6b7280;
      font-size: 13px;
    }
  `,
})
export class PropertyCard {
  title = input<string>('');
  price = input<number>(0);
}
