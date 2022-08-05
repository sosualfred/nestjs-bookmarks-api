import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return {
      msg: 'Login',
    };
  }

  register() {
    return {
      msg: 'Register',
    };
  }
}
