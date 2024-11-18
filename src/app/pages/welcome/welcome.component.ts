import { Component, OnInit } from '@angular/core';
import { CardNgZorroComponent } from '../../card-ng-zorro/card-ng-zorro.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [CardNgZorroComponent],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
