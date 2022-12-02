import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { profiles } from 'src/app/resources/profiles';

import { UserService } from '../../core/user.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    // const mockUserService = jasmine.createSpyObj('UserService', ['getUserById', 'getRandomNextUserId', 'searchInUsersName']);
    // mockUserService.getUsers.and.returnValue(of(profiles));

    const mockUserService = {
      getUserById: () => {},
      getUsers: () => {},
    }

    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      // providers: [ { provide: UserService, useValue: mockUserService } ]
    })
    .compileComponents();


    //fixture = TestBed.createComponent(UserListComponent);
    //component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
