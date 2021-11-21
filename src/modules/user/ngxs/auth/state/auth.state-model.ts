import { LoginResponseDto } from '../../../repository';

export interface AuthStateModel {
  id: number | null;
  key: string | null;
  chat_key: string | null;
}

export function createDefaultAuthStateModel(): AuthStateModel {
  return {
    id:       null,
    key:      null,
    chat_key: null,
  };
}

export function createAuthStateModelFromLoginResponse(response: LoginResponseDto): AuthStateModel {
  return {
    id:       response.id,
    key:      response.key,
    chat_key: response.chat_key,
  };
}
