export const baseUrl = "https://y220sfo8mg.execute-api.us-east-1.amazonaws.com";

export const authUrl = "/dev/auth";
export interface UserLoginInfo {
  username: string;
  password: string;
}

export const registerUrl = "/dev/register";
export interface UserRegisterInfo extends UserLoginInfo {
  name: string;
  bankToken: string;
  email: string;
}
