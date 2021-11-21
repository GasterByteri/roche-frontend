import { Selector }              from '@ngxs/store';
import { AUTH_STATE_IDENTIFIER } from './auth.state-identifier';
import { AuthStateModel }        from './auth.state-model';

export class AuthSelector {

  @Selector([AUTH_STATE_IDENTIFIER])
  public static id(state: AuthStateModel): number | null {
    return state.id;
  }

  @Selector([AUTH_STATE_IDENTIFIER])
  public static key(state: AuthStateModel): string | null {
    return state.key;
  }

  @Selector([AUTH_STATE_IDENTIFIER])
  public static chat_key(state: AuthStateModel): string | null {
    return state.chat_key;
  }

  @Selector([AUTH_STATE_IDENTIFIER])
  public static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.id;
  }

}
