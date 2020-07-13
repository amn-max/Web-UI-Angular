import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProjComponent } from './latest-proj.component';

describe('LatestProjComponent', () => {
  let component: LatestProjComponent;
  let fixture: ComponentFixture<LatestProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
