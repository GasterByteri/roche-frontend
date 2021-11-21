import { Component } from '@angular/core';

@Component({
  selector:    'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls:   ['./journal-card.component.scss']
})
export class JournalCardComponent {

public tagToggle(event: Event): void {
  let color = (event.target as HTMLElement).style.color;

  color !== '#707070' && color !== 'red' ? (event.target as HTMLElement).style.color = 'red' : (event.target as HTMLElement).style.color = '#707070'
}

}
