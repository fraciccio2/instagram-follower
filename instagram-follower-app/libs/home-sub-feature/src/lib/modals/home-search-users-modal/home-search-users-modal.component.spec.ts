import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSearchUsersModalComponent } from './home-search-users-modal.component';

describe('HomeSearchUsersModalComponent', () => {
  let component: HomeSearchUsersModalComponent;
  let fixture: ComponentFixture<HomeSearchUsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSearchUsersModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSearchUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
