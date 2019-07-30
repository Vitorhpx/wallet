interface Path {
  path: string;
  name: string;
}

export const AppPaths = {
  login: {
    path: '/login',
    name: 'Login'
  } as Path,
  signup: {
    path: '/registro',
    name: 'Registar-se'
  } as Path,
  wallet: {
    path: '/carteira',
    name: 'Carteira'
  } as Path,
  history: {
    path: '/extrato',
    name: 'Extrato'
  } as Path
};
