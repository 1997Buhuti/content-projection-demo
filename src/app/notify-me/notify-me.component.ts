import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-notify-me',
  standalone: true,
  imports: [CommonModule,MatCheckboxModule,FormsModule],
  templateUrl: './notify-me.component.html',
  styleUrls: ['./notify-me.component.scss']
})
export class NotifyMeComponent {
  @Output() checked = new EventEmitter();

  onChecked($event: boolean){
    this.checked.emit($event)
  }
}
