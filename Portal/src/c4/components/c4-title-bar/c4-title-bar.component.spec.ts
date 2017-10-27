import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4TitleComponent } from './c4-title-bar.component';

describe('C4TitleComponent', () => {
  let component: C4TitleComponent;
  let fixture: ComponentFixture<C4TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
