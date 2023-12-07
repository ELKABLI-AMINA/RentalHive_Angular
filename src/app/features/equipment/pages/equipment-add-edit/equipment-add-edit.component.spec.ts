import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAddEditComponent } from './equipment-add-edit.component';

describe('AddEditComponent', () => {
  let component: EquipmentAddEditComponent;
  let fixture: ComponentFixture<EquipmentAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
