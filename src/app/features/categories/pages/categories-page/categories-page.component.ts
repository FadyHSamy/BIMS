import { Component } from '@angular/core';
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonRow,
    IonSearchbar,
    IonText,
    IonTitle,
} from '@ionic/angular/standalone';
import { CardContentComponent } from 'src/app/shared/components/card/card-content/card-content.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';

@Component({
  selector: 'app-categories-page',
  imports: [
    IonRow,
    IonGrid,
    IonSearchbar,
    IonButton,
    IonText,
    IonContent,
    IonTitle,
    CategoriesListComponent,
    CardComponent,
    CardContentComponent,
    IconComponent,
    IonCol,
  ],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss',
})
export class CategoriesPageComponent {}
