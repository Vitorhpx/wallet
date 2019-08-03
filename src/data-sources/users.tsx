import axios from 'axios';

export const baseUrl =
  'https://hp9ebx8kqg.execute-api.us-east-1.amazonaws.com/stage';

export const authUrl = '/auth';
export interface UserLoginInfo {
  username: string;
  password: string;
}

export const registerUrl = '/register';
export interface UserRegisterInfo extends UserLoginInfo {
  name: string;
  bankToken: string;
  email: string;
}

export const user = '/user';

export interface UserInfo extends UserLoginInfo {
  data: {
    name: string;
    bankToken: string;
    email: string;
    banks: string[];
  };
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
