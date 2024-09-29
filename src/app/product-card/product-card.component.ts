import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyMeComponent } from '../notify-me/notify-me.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NotifyMeComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements AfterContentInit {
  @Output() isAddToCartClicked = new EventEmitter();
  @ContentChild(NotifyMeComponent) isNotifyMeChecked!: NotifyMeComponent;
  showMessage: boolean = false;

  ngAfterContentInit() {
    if (this.isNotifyMeChecked) {
      console.log(this.isNotifyMeChecked);
      this.isNotifyMeChecked.checked.subscribe((value) => {
        value? this.showMessage = true : this.showMessage=false;
      });
    }
  }
  addToCart() {
    this.isAddToCartClicked.emit(true);
  }
}
