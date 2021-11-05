import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerTrainComponent } from './follower-train.component';

describe('FollowerTrainComponent', () => {
  let component: FollowerTrainComponent;
  let fixture: ComponentFixture<FollowerTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
