import {Injectable} from '@angular/core';

@Injectable()
export class SecretService {
  public get adalConfig(): any {
    return {
      tenant: 'xxxxxx.onmicrosoft.com',
      clientId: '00000000-0000-0000-0000-000000000000',
      redirectUri: window.location.origin + '/',
      postLogoutRedirectUri: window.location.origin + '/'
    };
  }
}
