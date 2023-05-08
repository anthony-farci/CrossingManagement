import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailroadDetailComponent } from './railroad-detail.component';

describe('RailroadDetailComponent', () => {
  let component: RailroadDetailComponent;
  let fixture: ComponentFixture<RailroadDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailroadDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailroadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
