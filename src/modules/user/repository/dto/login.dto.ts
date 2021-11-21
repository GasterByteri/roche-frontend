import { DtoInterface } from '../../../../shared';

export class LoginDto implements DtoInterface {

  private readonly _email: string;

  private readonly _password: string;

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  public constructor(email: string, password: string) {
    this._email    = email;
    this._password = password;
  }

  public toJSON(): object {
    return {
      email:  this._email,
      password: this._password,
    };
  }

}
