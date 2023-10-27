import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactMePage } from './contact-me.page';

describe('ContactMePage', () => {
  let component: ContactMePage;
  let fixture: ComponentFixture<ContactMePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
