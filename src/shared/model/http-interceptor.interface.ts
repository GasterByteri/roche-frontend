import { Observable }            from 'rxjs';
import { HttpHandlerInterface }  from './http-handler.interface';
import { HttpRequestInterface }  from './http-request.interface';
import { HttpResponseInterface } from './http-response.interface';

export interface HttpInterceptorInterface {
  /**
   * Intercept HTTP request.
   *
   * You may intercept HTTP request, modify it and invoke next interceptor.
   * You may break interception chain and return your own response, or error it out.
   */
  intercept(request: HttpRequestInterface, next: HttpHandlerInterface): Observable<HttpResponseInterface<any>>;
}
