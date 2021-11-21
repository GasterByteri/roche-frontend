import { HTTP_INTERCEPTORS }        from '@angular/common/http';
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { NgxsModule }               from '@ngxs/store';
import { environment }              from '../environments/environment';
import { MaterialModule }           from '../modules';
import {
  AUTHENTICATION_GUARD_REDIRECTION_PATH,
  HTTP_PROVIDERS,
  HttpInterceptorInterface,
}                                   from '../shared';
import { HttpInterceptorsProvider } from '../shared/http/interceptors';
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { APP_COMPONENTS }           from './index';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
  ],
  imports:      [
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers:    [
    ...HTTP_PROVIDERS,
    {
      provide:    HttpInterceptorsProvider,
      deps:       [HTTP_INTERCEPTORS],
      useFactory: function provideHttpInterceptors(interceptors: HttpInterceptorInterface[]): HttpInterceptorsProvider {
        return new HttpInterceptorsProvider(interceptors);
      },
    },
    {
      provide:  AUTHENTICATION_GUARD_REDIRECTION_PATH,
      useValue: '/login',
    },
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {
}
