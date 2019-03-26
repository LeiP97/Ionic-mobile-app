import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioninfoPage } from './sessioninfo.page';

describe('SessioninfoPage', () => {
  let component: SessioninfoPage;
  let fixture: ComponentFixture<SessioninfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioninfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioninfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
