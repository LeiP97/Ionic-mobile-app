import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveDetailPage } from './observe-detail.page';

describe('ObserveDetailPage', () => {
  let component: ObserveDetailPage;
  let fixture: ComponentFixture<ObserveDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
