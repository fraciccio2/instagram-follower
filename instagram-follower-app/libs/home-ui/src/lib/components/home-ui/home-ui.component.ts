import { Component, Input } from '@angular/core';
import { AccountRepositoryLoginResponseLogged_in_user } from 'login-util';

@Component({
  selector: 'home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
})
export class HomeUiComponent {
  @Input() loggedUser:
    | AccountRepositoryLoginResponseLogged_in_user
    | undefined
    | null;
  @Input() imageProfile: string | undefined | null;
}
