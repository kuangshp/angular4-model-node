/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Work02Component } from './work02.component';

describe('Work02Component', () => {
  let component: Work02Component;
  let fixture: ComponentFixture<Work02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Work02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
