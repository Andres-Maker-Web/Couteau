import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetNamePage } from './det-name.page';

describe('DetNamePage', () => {
  let component: DetNamePage;
  let fixture: ComponentFixture<DetNamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
