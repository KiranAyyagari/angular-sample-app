import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`rating is ${this.rating}`);
    this.cropWidth = this.rating * 75 / 5;
    console.log(`cropWidth is ${this.cropWidth}`);
  }

  onClick(): void{
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  
}
