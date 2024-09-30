import {
  Component,
  ComponentRef,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  ProductCardComponent,
  ProductType,
} from './product-card/product-card.component';
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
    NgComponentOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'content-projection-demo';
  NotifyMeOnStockArrival: boolean = false;

  vcr = viewChild('container', { read: ViewContainerRef });
  notifyMeTemplate = viewChild<TemplateRef<unknown>>('notifyMe');
  #componentRef: ComponentRef<ProductCardComponent>;

  protected dynamicComponent: Type<ProductCardComponent> | null = null;
  protected dynamicComponentInputs = {
    productName: 'Coca-Cola',
    productType: ProductType.COCA_COLA,
  };

  onCrateButtonClick() {
    this.dynamicComponent = ProductCardComponent;
  }

  onDestroyButtonClick() {
    this.dynamicComponent = null;
  }

  onNotifyMeClicked($event: boolean) {
    this.NotifyMeOnStockArrival = $event;
    console.log($event);
  }
}
