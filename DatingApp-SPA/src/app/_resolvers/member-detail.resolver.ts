import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService ){}

         resolve(route: ActivatedRouteSnapshot): Observable<User> {
             return this.userService.getUser(route.params['id']).pipe(
                 catchError(error => {
                     this.alertify.error('Problem retriving Data');
                     this.router.navigate(['/members']);
                     return of(null);
                 })
             );
         }
}