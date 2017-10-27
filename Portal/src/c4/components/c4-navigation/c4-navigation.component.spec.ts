import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4NavigationComponent } from './c4-navigation.component';

describe('C4NavigationComponent', () => {
  let component: C4NavigationComponent;
  let fixture: ComponentFixture<C4NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
