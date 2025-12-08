import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card',
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
