import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowForFollowComponent } from './follow-for-follow.component';

describe('FollowForFollowComponent', () => {
  let component: FollowForFollowComponent;
  let fixture: ComponentFixture<FollowForFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowForFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowForFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
