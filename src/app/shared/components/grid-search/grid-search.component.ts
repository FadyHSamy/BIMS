import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-grid-search',
  templateUrl: './grid-search.component.html',
  styleUrls: ['./grid-search.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton],
})
export class GridSearchComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
