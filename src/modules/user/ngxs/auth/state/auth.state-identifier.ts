import { StateToken }     from '@ngxs/store';
import { AuthStateModel } from './auth.state-model';

export const AUTH_STATE_IDENTIFIER: StateToken<AuthStateModel> = new StateToken<AuthStateModel>('auth');
