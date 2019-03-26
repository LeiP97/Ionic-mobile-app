import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachermenuPage } from './teachermenu.page';

describe('TeachermenuPage', () => {
  let component: TeachermenuPage;
  let fixture: ComponentFixture<TeachermenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachermenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachermenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
