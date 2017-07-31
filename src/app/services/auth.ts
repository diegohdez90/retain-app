import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable()
export class AuthService implements CanActivate {
    JWT_KEY: string = 'retain_token';
    JWT: string = '';

    constructor(private route: Router) {

    }

    isAuthorized(): boolean {
        return Boolean(this.JWT)
    }

    canAcitvate() {
        const canActivate = this.isAuthorized();
        this.onCanActivate(canActivate);
        return canActivate;
    }

    onCanActivate(canActivate: boolean) {
        if ( !canActivate ) {
            this.route.navigate(['', 'auth']);
        }
    }
}


