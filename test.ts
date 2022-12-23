import { mock } from './build/';

const source = `
/* eslint-disable @typescript-eslint/no-unused-vars */

import { BaseRes } from './base.apidl';

export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  /**
   * @mock datatype.uuid
   */
  uid: number;
  /**
   * @mock internet.password
   */
  access: string;
  /**
   * @mock internet.password
   */
  refresh: string;
}

/**
 * user login
 *
 * @path /login
 * @method GET
 */
declare function login(params: LoginReq): LoginRes;

export interface RegisterReq {
  /**
   * @format email
   */
  username: string;
  password: string;
  password_confirm: string;
  email: string;
}

export type RegisterRes = LoginRes;

/**
 * user register
 *
 * @path /register
 * @method POST
 */
declare function register(params: RegisterReq): RegisterRes;

`;

const mockData = mock({
    files: [['docs', source]],
    interfaces: ['LoginRes'],
    output: 'json',
    isOptionalAlwaysEnabled: true,
  })
  .toString();

console.log(mockData, 'mock');
