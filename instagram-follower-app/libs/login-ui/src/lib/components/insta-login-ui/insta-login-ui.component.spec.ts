import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstaLoginUiComponent } from './insta-login-ui.component';

describe('InstaLoginUiComponent', () => {
  let component: InstaLoginUiComponent;
  let fixture: ComponentFixture<InstaLoginUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstaLoginUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstaLoginUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
