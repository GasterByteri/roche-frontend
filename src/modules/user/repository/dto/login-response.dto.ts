import { DtoInterface } from '../../../../shared';

export class LoginResponseDto implements DtoInterface {

  private readonly _id: number;

  private readonly _key: string;

  private readonly _chat_key: string;

  public get id(): number {
    return this._id;
  }

  public get key(): string {
    return this._key;
  }

  public get chat_key(): string {
    return this._chat_key;
  }

  public constructor(id: number, key: string, chat_Key: string) {
    this._id    = id;
    this._key = key;
    this._chat_key = chat_Key;
  }

  public toJSON(): object {
    return {
      id:  this._id,
      key: this._key,
      chat_key: this._chat_key,
    };
  }

}
