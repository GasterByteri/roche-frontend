import { HttpStatusCode }       from '@angular/common/http';
import { HttpHeadersInterface } from './http-headers.interface';

export interface HttpResponseInterface<T> {
  /**
   * Get final destination URL.
   */
  readonly url: string;
  /**
   * Get response status code.
   */
  readonly status: HttpStatusCode;
  /**
   * Get response headers.
   */
  readonly headers: HttpHeadersInterface;
  /**
   * Get response content.
   */
  readonly content: Promise<T>;
  /**
   * Create copy, replacing given properties.
   */
  clone(replace?: Partial<HttpResponseInterface<T>>): HttpResponseInterface<T>;
}
