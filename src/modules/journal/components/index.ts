import { Type }                   from '@angular/core';
import { JournalCardComponent }  from './journal-card/journal-card.component';
import { JournalFilterComponent } from './journal-filter/journal-filter.component';
import { JournalInputComponent }  from './journal-input/journal-input.component';
import { JournalListComponent }   from './journal-list/journal-list.component';

export { JournalCardComponent }  from './journal-card/journal-card.component';
export { JournalInputComponent }  from './journal-input/journal-input.component';
export { JournalListComponent }   from './journal-list/journal-list.component';
export { JournalFilterComponent } from './journal-filter/journal-filter.component';
export const JOURNAL_COMPONENTS: Type<any> [] = [
  JournalFilterComponent,
  JournalListComponent,
  JournalInputComponent,
  JournalCardComponent
];
