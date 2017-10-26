import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4MainComponent } from './c4-main.component';

describe('C4MainComponent', () => {
  let component: C4MainComponent;
  let fixture: ComponentFixture<C4MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
