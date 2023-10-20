import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatrixEffectUiComponent } from './matrix-effect-ui.component';

describe('MatrixEffectUiComponent', () => {
  let component: MatrixEffectUiComponent;
  let fixture: ComponentFixture<MatrixEffectUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatrixEffectUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatrixEffectUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
