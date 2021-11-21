import { CommonModule }      from '@angular/common';
import { HttpClientModule }  from '@angular/common/http';
import { NgModule }          from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
}                            from '@angular/forms';
import { NgxsModule }        from '@ngxs/store';
import { MaterialModule }    from '../material';
import { USER_NGXS_STATES }  from './ngxs';
import { USER_PAGES }        from './pages';
import { AUTH_PROVIDERS }    from './repository';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ...USER_PAGES,
    // ...USER_COMPONENTS,
  ],
  imports:      [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forFeature(
      [
        ...USER_NGXS_STATES,
      ],
    ),
    MaterialModule,

  ],
  providers:    [
    ...AUTH_PROVIDERS,
  ],
})
export class UserModule {
}
