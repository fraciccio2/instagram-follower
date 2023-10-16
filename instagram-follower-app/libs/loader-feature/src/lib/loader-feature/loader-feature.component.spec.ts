import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderFeatureComponent } from './loader-feature.component';

describe('LoaderFeatureComponent', () => {
  let component: LoaderFeatureComponent;
  let fixture: ComponentFixture<LoaderFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
