import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForblockComponent } from './forblock.component';

describe('ForblockComponent', () => {
  let component: ForblockComponent;
  let fixture: ComponentFixture<ForblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
