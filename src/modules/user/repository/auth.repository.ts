import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  LoginDto,
  LoginResponseDto,
}                      from './dto';

@Injectable()
export class AuthRepository {

  private readonly _http: HttpClient;


  constructor(http: HttpClient) {
    this._http = http;
  }

  public async login(dto: LoginDto): Promise<LoginResponseDto> {
    return await this._http.post<LoginResponseDto>(`${environment.api}/login/`, {
      email:    dto.email,
      password: dto.password,
    }).toPromise();
  }

  }
