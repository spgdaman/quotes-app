import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdownVoteComponent } from './updown-vote.component';

describe('UpdownVoteComponent', () => {
  let component: UpdownVoteComponent;
  let fixture: ComponentFixture<UpdownVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdownVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdownVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
