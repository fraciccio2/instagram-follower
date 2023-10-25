import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUserUiComponent } from './home-user-ui.component';

describe('HomeUserUiComponent', () => {
  let component: HomeUserUiComponent;
  let fixture: ComponentFixture<HomeUserUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeUserUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUserUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
