import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByUserComponent } from './by-user.component';

describe('ByUserComponent', () => {
  let component: ByUserComponent;
  let fixture: ComponentFixture<ByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
