import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolaComponent } from './rola.component';

describe('RolaComponent', () => {
  let component: RolaComponent;
  let fixture: ComponentFixture<RolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
