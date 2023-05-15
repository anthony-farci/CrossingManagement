import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRailroadComponent } from './edit-railroad.component';

describe('EditRailroadComponent', () => {
  let component: EditRailroadComponent;
  let fixture: ComponentFixture<EditRailroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRailroadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRailroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
