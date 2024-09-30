import {
  Component,
  ComponentRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { NotifyMeComponent } from './notify-me/notify-me.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductCardComponent,
    NotifyMeComponent,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'content-projection-demo';
  NotifyMeOnStockArrival: boolean = false;

  vcr = viewChild('container', { read: ViewContainerRef });
  #componentRef: ComponentRef<ProductCardComponent>;

  onCrateButtonClick() {
    console.log('Button clicked');
    this.#componentRef = this.vcr()?.createComponent(ProductCardComponent);

    // How to pass inputs for dynamic components

    this.#componentRef.instance.productName;
  }

  onDestroyButtonClick() {
    //This will only remove last created component
    // this.#componentRef?.destroy();
    //Will clear all the components
    this.vcr().clear();
    //Will remove specific component in array
    // this.vcr().remove(0);
  }

  onNotifyMeClicked($event: boolean) {
    this.NotifyMeOnStockArrival = $event;
    console.log($event);
  }
}
