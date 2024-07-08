import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacaronCardComponent } from './macaron-card.component';

describe('MacaronCardComponent', () => {
  let component: MacaronCardComponent;
  let fixture: ComponentFixture<MacaronCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacaronCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacaronCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
