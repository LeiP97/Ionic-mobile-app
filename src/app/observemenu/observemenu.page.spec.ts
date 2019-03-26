import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservemenuPage } from './observemenu.page';

describe('ObservemenuPage', () => {
  let component: ObservemenuPage;
  let fixture: ComponentFixture<ObservemenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservemenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
