import { NgModule }           from '@angular/core';
import { MaterialModule }     from '../material';
import { ADMIN_COMPONENTS }   from './components';
import { ADMIN_PAGES }        from './pages';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    ...ADMIN_PAGES,
    ...ADMIN_COMPONENTS,
  ],
  imports:      [
    AdminRoutingModule,
    MaterialModule,
  ],
  providers:    [],
})
export class AdminModule {
}
