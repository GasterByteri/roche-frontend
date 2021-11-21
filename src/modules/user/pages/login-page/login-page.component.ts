import { Component }       from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Store }           from '@ngxs/store';
import { LoginForm }       from '../../forms';
import { Login }           from '../../ngxs';

@Component({
  selector:    'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls:   ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(store: Store) {
    this._store = store;
  }

  public get form(): LoginForm {
    return this._form;
  }

  public get pwVisible(): boolean {
    return this._pwVisible;
  }

  private _pwVisible = false;

  private _store: Store;

  private readonly _form: LoginForm = new LoginForm();

  public async onSubmit(): Promise<void> {
    this._store.dispatch(new Login(this.form.getValue().email, this.form.getValue().password))
  }

  public revealPassword(): void {
    this._pwVisible = !this._pwVisible;
  }

  public getControlErrors(controlName: string): string {
    let control: AbstractControl | null = this._form.get(controlName);

    if (control && control.hasError('required')) {
      return 'Ovo polje je obavezno!'
    }

    if (control && control.hasError('email')) {
      return 'Ovo polje mora biti email!'
    }

    return '';

  }

}
