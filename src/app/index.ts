import { Type }            from '@angular/core';
import { AppComponent }    from './app.component';
import {
  HeaderComponent,
  LayoutComponent,
  SidenavListComponent,
} from './components';

export const APP_COMPONENTS: Type<any> [] = [
  HeaderComponent,
  LayoutComponent,
  SidenavListComponent,
  AppComponent,
];
