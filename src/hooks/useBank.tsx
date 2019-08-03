import React, { useEffect } from 'react';
import { BANKS } from '../utils/API';
import { getUserInfo } from '../data-sources/users';

export function useBank(accessToken: string) {
  const [bank, setBank] = React.useState<string>('');

  useEffect(() => {
    async function getUserBank() {
      //todo: pegar o banco certo da API
      if (sessionStorage.getItem(BANKS) !== null) {
        setBank('banco1');
      } else {
        //const response = await getUserInfo(accessToken);
        sessionStorage.setItem(BANKS, 'banco1');
        setBank(bank);
      }
    }

    getUserBank();
  }, [accessToken, bank]);

  return bank;
}
