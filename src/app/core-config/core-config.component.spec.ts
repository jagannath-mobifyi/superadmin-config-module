import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreConfigComponent } from './core-config.component';

describe('CoreConfigComponent', () => {
  let component: CoreConfigComponent;
  let fixture: ComponentFixture<CoreConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
