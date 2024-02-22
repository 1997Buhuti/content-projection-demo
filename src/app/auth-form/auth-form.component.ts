import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './auth-form.interface';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    AuthFormComponent,
    MatGridListModule,
    MatCardModule,
  ],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  @Input() user: User = { email: '', password: '' }; // Optional initial user data

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
