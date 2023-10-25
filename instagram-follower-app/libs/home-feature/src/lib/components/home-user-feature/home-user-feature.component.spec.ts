import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUserFeatureComponent } from './home-user-feature.component';

describe('HomeUserFeatureComponent', () => {
  let component: HomeUserFeatureComponent;
  let fixture: ComponentFixture<HomeUserFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeUserFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUserFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
