import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatedComponent } from './usercreated.component';

describe('UsercreatedComponent', () => {
  let component: UsercreatedComponent;
  let fixture: ComponentFixture<UsercreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
