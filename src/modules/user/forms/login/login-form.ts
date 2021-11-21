import {
  FormControl,
  FormGroup,
  Validators,
}                        from '@angular/forms';
import { LoginFormData } from './login-form.data';

export class LoginForm extends FormGroup {

  public constructor() {
    super({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      password: new FormControl('', Validators.required),
    });
  }

  public getValue(): LoginFormData {
    if (!this.valid) {
      throw Error('Values are not available for invalid form.');
    }

    return {
      email: this.value.email,
      password: this.value.password,
    };
  }

}
