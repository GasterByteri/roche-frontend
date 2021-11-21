import { Component }    from '@angular/core';
import { Select }       from '@ngxs/store';
import { Observable }   from 'rxjs';
import { AuthSelector } from '../modules/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(AuthSelector.isAuthenticated)
  public isAuthenticated$!:Observable<boolean>;

}
