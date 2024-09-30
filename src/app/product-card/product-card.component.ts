import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyMeComponent } from '../notify-me/notify-me.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    NotifyMeComponent,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Output() isAddToCartClicked = new EventEmitter();
  @ContentChild(NotifyMeComponent) isNotifyMeChecked!: NotifyMeComponent;
  @Input() productName: string = 'Mountain Bicycle';
  @Input() productDescription: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  @Input() productType: ProductType = ProductType.BIKE;
  showMessage: boolean = false;
  imageUri: string = '';

  ngOnInit(): void {
    this.setImageURI(this.productType);
  }
  setImageURI(productType: ProductType) {
    switch (productType) {
      case ProductType.BIKE:
        this.imageUri = '../assets/22.jpg';
        break;
      case ProductType.COCA_COLA:
        this.imageUri = '../assets/coca-cola.jpg';
        break;
      case ProductType.FRUIT:
        this.imageUri = '../assets/pineapple.jpg';
        break;
    }
  }

  onClickCloseButton() {
    console.log('Close Button clicked');
  }
}

export enum ProductType {
  COCA_COLA = 'COCA_COLA',
  FRUIT = 'FRUIT',
  BIKE = 'BIKE',
}
