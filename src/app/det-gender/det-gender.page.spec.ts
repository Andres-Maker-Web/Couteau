import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetGenderPage } from './det-gender.page';

describe('DetGenderPage', () => {
  let component: DetGenderPage;
  let fixture: ComponentFixture<DetGenderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetGenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
