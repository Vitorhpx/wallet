import axios from 'axios';

export const baseUrl = 'https://y220sfo8mg.execute-api.us-east-1.amazonaws.com';

export const authUrl = '/dev/auth';
export interface UserLoginInfo {
  username: string;
  password: string;
}

export const registerUrl = '/dev/register';
export interface UserRegisterInfo extends UserLoginInfo {
  name: string;
  bankToken: string;
  email: string;
}

export const user = '/dev/user';

export interface UserInfo extends UserLoginInfo {
  name: string;
  bankToken: string;
  email: string;
}

export const getUserInfo = (accessToken: string) => {
  return axios
    .get<UserInfo>(`${baseUrl}${user}`, {
      headers: { 'x-access-token': accessToken }
    })
    .then(response => {
      console.log('TCL: getOrders -> response', response);
      return response;
    });
};
