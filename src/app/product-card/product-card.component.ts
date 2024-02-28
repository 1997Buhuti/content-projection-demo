import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyMeComponent } from '../notify-me/notify-me.component';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NotifyMeComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements AfterContentInit {
  @Output() isAddToCartClicked = new EventEmitter();
  @ContentChildren(NotifyMeComponent)
  isNotifyMeChecked!: QueryList<NotifyMeComponent>;
  showMessage: boolean = false;

  ngAfterContentInit() {
    if (this.isNotifyMeChecked) {
      console.log(this.isNotifyMeChecked);
      // this.isNotifyMeChecked.checked.subscribe((value) => {
      //   value? this.showMessage = true : this.showMessage=false;
      // });
      this.isNotifyMeChecked.forEach((item, index) => {
        item.checked.subscribe((value) =>
          console.log(`checkBox ${index}=${value}`)
        );
      });
    }
  }
  addToCart() {
    this.isAddToCartClicked.emit(true);
  }
}
