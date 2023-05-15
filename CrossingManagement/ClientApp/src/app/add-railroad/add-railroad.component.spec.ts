import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRailroadComponent } from './add-railroad.component';

describe('AddRailroadComponent', () => {
  let component: AddRailroadComponent;
  let fixture: ComponentFixture<AddRailroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRailroadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRailroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
