import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmoduleComponent } from './switchmodule.component';

describe('SwitchmoduleComponent', () => {
  let component: SwitchmoduleComponent;
  let fixture: ComponentFixture<SwitchmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
