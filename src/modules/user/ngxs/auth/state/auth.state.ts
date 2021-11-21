import { Injectable }            from '@angular/core';
import {
  Action,
  State,
  StateContext,
  Store,
} from '@ngxs/store';
import {
  AuthRepository,
  LoginDto,
  LoginResponseDto,
} from '../../../repository';
import {
  LoggedIn,
  Login,
} from '../actions';
import { AUTH_STATE_IDENTIFIER } from './auth.state-identifier';
import {
  AuthStateModel,
  createAuthStateModelFromLoginResponse,
  createDefaultAuthStateModel,
} from './auth.state-model';

@State<AuthStateModel>({
  name:     AUTH_STATE_IDENTIFIER,
  defaults: createDefaultAuthStateModel(),
})
@Injectable()
export class AuthState {

  private readonly _repository: AuthRepository;

  private _store: Store;

  constructor(repository: AuthRepository, store: Store) {
    this._repository = repository;
    this._store      = store;
  }

  @Action(Login)
  public async login(ctx: StateContext<AuthStateModel>, action: Login): Promise<void> {
    let data: LoginDto = new LoginDto(action.email, action.password)
    let response: LoginResponseDto = await this._repository.login(data);
    console.log(response);
    ctx.setState(createAuthStateModelFromLoginResponse(response));

    await this._store.dispatch(new LoggedIn()).toPromise();
  }

}
