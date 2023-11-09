import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePostsTabUiComponent } from './home-posts-tab-ui.component';

describe('HomePostsTabUiComponent', () => {
  let component: HomePostsTabUiComponent;
  let fixture: ComponentFixture<HomePostsTabUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePostsTabUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePostsTabUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
