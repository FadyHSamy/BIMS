import { Component } from '@angular/core';
import { IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-header',
  imports: [IonCardTitle, IonCardHeader],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
})
export class CardHeaderComponent {}
