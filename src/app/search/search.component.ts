import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cardio } from '../cardio';
import { CardioService } from '../services/cardio.service';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cardios$: Observable<Cardio[]>;
  private searchTerms = new Subject<string>();

  constructor(private cardioService: CardioService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cardios$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.cardioService.searchCardios(term)),
    );
  }
}
