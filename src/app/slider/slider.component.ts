import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { CardioService } from '../services/cardio.service';
import { Cardio } from '../cardio';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('divState', [
      state('beginnerState', style({
        'background-color': 'red',
        transform: 'translateX(0px)'
      })),
      state('intermediateState', style({
        'background-color': 'blue',
        transform: 'translateX(150px)'
      })),
      state('advancedState', style({
        'background-color': 'yellow',
        transform: 'translateX(300px)'
      })),
      // transition('beginnerState => intermediateState', animate(300)),
      // transition('beginnerState => advancedState', animate(300)),

      // transition('intermediateState => beginnerState', animate(300)),
      // transition('intermediateState => advancedState', animate(300)),

      // transition('advancedState => beginnerState', animate(300)),
      // transition('advancedState => intermediateState', animate(300)),
      

    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() filterString: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  beginner: boolean = true;
  state = 'beginnerState';
  private onChange: any;

  constructor(private cardioService: CardioService) { }

  ngOnInit() {
  }

  onAnimate() {

  }

  filterClick(param: string) {
    console.log(param);
    
    if (param == 'Beginner') {
      this.state = 'beginnerState'
      console.log(this.state);
      
    } else if (param == 'Intermediate') {
      this.state = 'intermediateState'
    } else {
      this.state = 'advancedState'
    }
    this.valueChange.emit(param);
    if (this.onChange) {
      this.onChange(param);
    }
  }
}

