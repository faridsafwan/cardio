import { Component, OnInit, Input } from '@angular/core';
import { Cardio } from '../cardio';
import { ActivatedRoute } from '@angular/router';
import { CardioService } from '../services/cardio.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() cardio: Cardio;

  constructor(
    private route: ActivatedRoute,
    private cardioService: CardioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCardio();
  }

  getCardio(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardioService.getCardio(id)
      .subscribe(cardio => this.cardio = cardio);
  }

  goBack(): void {
    this.location.back();
  }

//  save(): void {
//     this.cardioService.update(this.hero)
//       .subscribe(() => this.goBack());
//   }

}
