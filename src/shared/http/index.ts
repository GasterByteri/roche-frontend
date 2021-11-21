import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider }        from '@angular/core';
import { AuthInterceptor } from './interceptors';

export const HTTP_PROVIDERS: Provider[] = [
  {
    provide:  HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:    true,
  },
];
