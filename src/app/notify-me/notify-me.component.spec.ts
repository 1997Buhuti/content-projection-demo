import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyMeComponent } from './notify-me.component';

describe('NotifyMeComponent', () => {
  let component: NotifyMeComponent;
  let fixture: ComponentFixture<NotifyMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotifyMeComponent]
    });
    fixture = TestBed.createComponent(NotifyMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
