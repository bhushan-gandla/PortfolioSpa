import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLandingPageComponent } from './portfolio-landing-page.component';

describe('PortfolioLandingPageComponent', () => {
  let component: PortfolioLandingPageComponent;
  let fixture: ComponentFixture<PortfolioLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
