import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeFormComponent } from './fake-form.component';

describe('FakeFormComponent', () => {
  let component: FakeFormComponent;
  let fixture: ComponentFixture<FakeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
