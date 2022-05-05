import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFacilitiesComponent } from './delete-facilities.component';

describe('DeleteFacilitiesComponent', () => {
  let component: DeleteFacilitiesComponent;
  let fixture: ComponentFixture<DeleteFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
