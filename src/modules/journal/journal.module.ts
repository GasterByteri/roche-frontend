import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
}                               from '@angular/forms';
import { MaterialModule }       from '../material';
import { JOURNAL_COMPONENTS }   from './components';
import { JournalRoutingModule } from './journal-routing.module';
import { JOURNAL_PAGES }        from './pages';

@NgModule({
  declarations: [
    ...JOURNAL_PAGES,
    ...JOURNAL_COMPONENTS,
  ],
  imports:      [
    CommonModule,
    JournalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers:    [],
})
export class JournalModule {
}
