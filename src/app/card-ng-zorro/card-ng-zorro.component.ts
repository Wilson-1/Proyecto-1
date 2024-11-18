import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';


@Component({
  selector: 'app-card-ng-zorro',
  templateUrl: './card-ng-zorro.component.html',
  imports: [NzCardModule],
  standalone: true,
})
export class CardNgZorroComponent {}
