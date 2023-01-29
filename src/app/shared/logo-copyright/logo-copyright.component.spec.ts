import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCopyrightComponent } from './logo-copyright.component';

describe('LogoCopyrightComponent', () => {
  let component: LogoCopyrightComponent;
  let fixture: ComponentFixture<LogoCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCopyrightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
