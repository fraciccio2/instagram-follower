import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss'],
})
export class LoginUiComponent {
  @Input() formGroupLogin: FormGroup | undefined;
  @Input() formControlNameUsername: string | null = null;
  @Input() formControlNamePassword: string | null = null;
  @Output() login = new EventEmitter<void>();
}
