import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopUserProfileComponent } from './shop-user-profile.component';

describe('ShopUserProfileComponent', () => {
  let component: ShopUserProfileComponent;
  let fixture: ComponentFixture<ShopUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopUserProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
