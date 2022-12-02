import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FakeFormComponent } from './fake-form/fake-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    FakeFormComponent,
    ProfileCardComponent,
    UserListContainerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
