import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDetailsComponent } from './equipment-details.component';

describe('DetailsComponent', () => {
  let component: EquipmentDetailsComponent;
  let fixture: ComponentFixture<EquipmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
