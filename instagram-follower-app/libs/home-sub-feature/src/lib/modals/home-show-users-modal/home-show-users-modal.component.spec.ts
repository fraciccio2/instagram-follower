import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeShowUsersModalComponent } from './home-show-users-modal.component';

describe('HomeShowUsersModalComponent', () => {
  let component: HomeShowUsersModalComponent;
  let fixture: ComponentFixture<HomeShowUsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeShowUsersModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeShowUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
