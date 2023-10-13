import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstaLoginFeatureComponent } from './insta-login-feature.component';

describe('InstaLoginFeatureComponent', () => {
  let component: InstaLoginFeatureComponent;
  let fixture: ComponentFixture<InstaLoginFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstaLoginFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstaLoginFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
