import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirtyGuard } from '../dirty.guard';
import { UserGuard } from '../user.guard';
import { UserResolver } from '../user.resolver';
import { FakeFormComponent } from './fake-form/fake-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'fake-form',
    component: FakeFormComponent,
    canDeactivate: [ DirtyGuard ]
  },
  {
    path: ':uid',
    component: UserDetailsComponent,
    canActivate: [ UserGuard ],
    // resolve: {
    //   user: UserResolver
    // }
  },
  {
    path: '',
    component: UserListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
