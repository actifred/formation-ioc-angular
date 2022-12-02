import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DirtyGuard } from './dirty.guard';
import { SplashComponent } from './splash/splash.component';
import { UserGuard } from './user.guard';
import { FakeFormComponent } from './user/fake-form/fake-form.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserMainComponent } from './user/user-main/user-main.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user',
    component: UserMainComponent,
    children: [
      {
        path: 'fake-form',
        component: FakeFormComponent,
        canDeactivate: [ DirtyGuard ]
      },
      {
        path: ':uid',
        component: UserDetailsComponent,
        canActivate: [ UserGuard ]
      },
      {
        path: '',
        component: UserListComponent
      },
    ]
  },
  {
    path: '',
    component: SplashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
