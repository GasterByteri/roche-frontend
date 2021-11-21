import { Observable }            from 'rxjs';
import { HttpRequestInterface }  from './http-request.interface';
import { HttpResponseInterface } from './http-response.interface';

export interface HttpHandlerInterface {
  /**
   * Handle request.
   */
  handle(request: HttpRequestInterface): Observable<HttpResponseInterface<any>>;
}
