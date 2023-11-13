import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleHeroComponent } from './shuffle-hero.component';

describe('ShuffleHeroComponent', () => {
  let component: ShuffleHeroComponent;
  let fixture: ComponentFixture<ShuffleHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShuffleHeroComponent]
    });
    fixture = TestBed.createComponent(ShuffleHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
