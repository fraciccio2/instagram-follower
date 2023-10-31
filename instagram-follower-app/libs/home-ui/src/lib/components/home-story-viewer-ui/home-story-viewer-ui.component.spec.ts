import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeStoryViewerUiComponent } from './home-story-viewer-ui.component';

describe('HomeStoryViewerUiComponent', () => {
  let component: HomeStoryViewerUiComponent;
  let fixture: ComponentFixture<HomeStoryViewerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeStoryViewerUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeStoryViewerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
