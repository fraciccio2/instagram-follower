import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeShowUserInfosModalComponent } from './home-show-user-infos-modal.component';

describe('HomeShowUserInfosModalComponent', () => {
  let component: HomeShowUserInfosModalComponent;
  let fixture: ComponentFixture<HomeShowUserInfosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeShowUserInfosModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeShowUserInfosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
