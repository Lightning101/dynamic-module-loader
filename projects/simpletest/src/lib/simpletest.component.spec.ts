import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletestComponent } from './simpletest.component';

describe('SimpletestComponent', () => {
  let component: SimpletestComponent;
  let fixture: ComponentFixture<SimpletestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpletestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
