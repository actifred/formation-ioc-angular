// import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

@Component(
  {
    selector: 'app-user-main'
  }
)
class MockUserMain {}

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent, MockUserMain ],
//      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a titre equal to toto', () => {
    expect(component.titre).toEqual('toto');
  });


  it('should display a titre equal to toto', () => {
    const elementH1 = fixture.nativeElement.querySelector('h1');
    expect(elementH1.innerText).toEqual('toto');
  });
});
