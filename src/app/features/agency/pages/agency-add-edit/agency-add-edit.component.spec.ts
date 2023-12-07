import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyAddEditComponent } from './agency-add-edit.component';

describe('AddEditComponent', () => {
  let component: AgencyAddEditComponent;
  let fixture: ComponentFixture<AgencyAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
