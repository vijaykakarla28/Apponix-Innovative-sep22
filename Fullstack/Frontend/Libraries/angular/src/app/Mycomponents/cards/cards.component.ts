import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
@Input() img1:any
@Input() title:any
@Input() text:any
@Input() btn:any
}
