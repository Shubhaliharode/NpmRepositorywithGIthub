import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseblockComponent } from './ifelseblock.component';

describe('IfelseblockComponent', () => {
  let component: IfelseblockComponent;
  let fixture: ComponentFixture<IfelseblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfelseblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
