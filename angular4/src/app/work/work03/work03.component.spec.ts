/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Work03Component } from './work03.component';

describe('Work03Component', () => {
  let component: Work03Component;
  let fixture: ComponentFixture<Work03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Work03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
