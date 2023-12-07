import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDetailsComponent } from './agency-details.component';

describe('DetailsComponent', () => {
  let component: AgencyDetailsComponent;
  let fixture: ComponentFixture<AgencyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
