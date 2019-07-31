interface Path {
  path: string;
  name: string;
}

export const AppPaths = {
  home: {
    path: '/home',
    name: 'Home'
  } as Path,
  loginPage: {
    path: '/login',
    name: 'Login'
  } as Path
};
