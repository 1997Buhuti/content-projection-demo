import { Component, viewChild, ViewContainerRef } from '@angular/core';
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

  onCrateButtonClick() {
    console.log('Button clicked');
    this.vcr()?.createComponent(ProductCardComponent);
  }

  onDestroyButtonClick() {
    console.log('Button clicked');
  }

  onNotifyMeClicked($event: boolean) {
    this.NotifyMeOnStockArrival = $event;
    console.log($event);
  }
}
