import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { Store }                                 from '@ngxs/store';
import { AuthSelector }                          from '../../modules/user';
import { AUTHENTICATION_GUARD_REDIRECTION_PATH } from './guard-tokens';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {

  private readonly _store: Store;

  private readonly _router: Router;

  private readonly _loginPagePath: string;

  public constructor(
    store: Store,
    router: Router,
    @Inject(AUTHENTICATION_GUARD_REDIRECTION_PATH) loginPagePath: string,
  ) {
    this._store         = store;
    this._router        = router;
    this._loginPagePath = loginPagePath;
  }

  public canActivate(): boolean | UrlTree {
    let authenticated: boolean = this._store.selectSnapshot(AuthSelector.isAuthenticated);

    if (!authenticated) {
      return this._router.parseUrl(this._loginPagePath);
    }

    return true;
  }

  public canActivateChild(): boolean | UrlTree {
    return this.canActivate();
  }

}
