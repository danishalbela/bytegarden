import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-shuffle-hero',
  templateUrl: './shuffle-hero.component.html',
  styleUrls: ['./shuffle-hero.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1500ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('1500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ShuffleHeroComponent implements OnInit, OnDestroy {
  squares: any[] = [];
  timeoutRef: any;

  squareData = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    // ... (same data as in the React code)
  ];

  constructor() {}

  ngOnInit(): void {
    this.shuffleSquares();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutRef);
  }

  shuffleSquares(): void {
    this.squares = this.generateSquares();
    this.timeoutRef = setTimeout(() => this.shuffleSquares(), 3000);
  }

  generateSquares(): any[] {
    return this.shuffle([...this.squareData]).map((sq) => ({
      id: sq.id,
      src: sq.src,
      animationState: 'fadeInOut',
    }));
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
