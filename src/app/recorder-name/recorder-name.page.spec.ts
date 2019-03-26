import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorderNamePage } from './recorder-name.page';

describe('RecorderNamePage', () => {
  let component: RecorderNamePage;
  let fixture: ComponentFixture<RecorderNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorderNamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorderNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
