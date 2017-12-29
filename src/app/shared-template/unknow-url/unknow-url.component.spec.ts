import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowUrlComponent } from './unknow-url.component';

describe('UnknowUrlComponent', () => {
  let component: UnknowUrlComponent;
  let fixture: ComponentFixture<UnknowUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknowUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknowUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
