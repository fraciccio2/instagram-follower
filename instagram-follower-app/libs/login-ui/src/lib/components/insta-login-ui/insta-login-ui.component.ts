import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'insta-login-ui',
  templateUrl: './insta-login-ui.component.html',
  styleUrls: ['./insta-login-ui.component.scss'],
})
export class InstaLoginUiComponent {
  @Output() login = new EventEmitter<void>();
}
