import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeFormComponent } from './user/fake-form/fake-form.component';

export interface DirtifiableComponent {
  isDirty(): boolean;
};

@Injectable({
  providedIn: 'root'
})
export class DirtyGuard implements CanDeactivate<DirtifiableComponent> {
  canDeactivate(
    component: DirtifiableComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.isDirty();
  }
  
}
