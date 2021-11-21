import { Injectable }           from '@angular/core';
import { Router }               from '@angular/router';
import { Store }                from '@ngxs/store';
import { Observable }   from 'rxjs';
import { AuthSelector } from '../../../modules/user';
import {
  HttpHandlerInterface,
  HttpInterceptorInterface,
  HttpRequestInterface,
  HttpResponseInterface,
}                       from '../../model';

@Injectable()
export class AuthInterceptor implements HttpInterceptorInterface {

  private readonly _router: Router;

  private readonly _store: Store;

  public constructor(router: Router, store: Store) {
    this._router = router;
    this._store  = store;
  }

  public get router(): Router {
    return this._router;
  }

  public get store(): Store {
    return this._store;
  }

  public intercept(request: HttpRequestInterface, next: HttpHandlerInterface): Observable<HttpResponseInterface<any>> {
    let token: string | null           = this._store.selectSnapshot<string | null>(AuthSelector.key);
    let modified: HttpRequestInterface = AuthInterceptor.authenticate(request, token);

    return next.handle(modified);
  }

  public static authenticate(request: HttpRequestInterface, key: string | null): HttpRequestInterface {
    if (!key) { // no key has been set, no need to modify request;
      return request;
    }

    return request.clone({
      headers: request.headers.append('Authorization', `Bearer ${key}`),
    });
  }
}
