import { Provider }       from '@angular/core';
import { AuthRepository } from './auth.repository';

export *                  from './dto';
export { AuthRepository } from './auth.repository';

export const AUTH_PROVIDERS: Provider[] = [
  AuthRepository,
];
