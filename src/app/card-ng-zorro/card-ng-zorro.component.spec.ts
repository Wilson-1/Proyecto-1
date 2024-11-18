import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardNgZorroComponent } from './card-ng-zorro.component';

describe('CardNgZorroComponent', () => {
  let component: CardNgZorroComponent;
  let fixture: ComponentFixture<CardNgZorroComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNgZorroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNgZorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
