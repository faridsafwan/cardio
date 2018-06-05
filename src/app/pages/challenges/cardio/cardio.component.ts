import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CardioService } from '../../../services/cardio.service';
import { Cardio } from '../../../cardio';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent implements OnInit {
  cardios: Cardio[];
  filterCardio: string;

  constructor(private cardioService: CardioService) { }

  ngOnInit() {
    this.filterCardio = 'Beginner';
    this.getCardioChallenge();
  }

  getCardioChallenge(): void {
    this.cardioService.getCardios()
      .subscribe(cardios => this.cardios = cardios);
  }
}

@Pipe({ name: 'cardio' })
export class CardioPipe implements PipeTransform {
  transform(items: Cardio[], stringFilter: string): Cardio[] {
    if (items) {
      return items.filter(item => item.level === stringFilter);
    }
  }
}
