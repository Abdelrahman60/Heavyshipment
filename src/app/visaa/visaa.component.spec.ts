import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaaComponent } from './visaa.component';

describe('VisaaComponent', () => {
  let component: VisaaComponent;
  let fixture: ComponentFixture<VisaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
