import { Type }      from '@angular/core';
import { AuthState } from './auth';
export * from './auth';
export const USER_NGXS_STATES: Type<any>[] = [
  AuthState,
];
