import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignintoComponent } from './signinto.component';

describe('SignintoComponent', () => {
  let component: SignintoComponent;
  let fixture: ComponentFixture<SignintoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignintoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
