import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinchesComponent } from './winches.component';

describe('WinchesComponent', () => {
  let component: WinchesComponent;
  let fixture: ComponentFixture<WinchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
