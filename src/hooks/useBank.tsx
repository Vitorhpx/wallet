import React, { useEffect } from 'react';
import { BANKS } from '../utils/API';
import { getUserInfo } from '../data-sources/users';

export function useBank(accessToken: string) {
  const [bank, setBank] = React.useState<string>('');

  useEffect(() => {
    async function getUserBank() {
      const response = await getUserInfo(accessToken);
      const { banks } = response.data.data;
      console.log(
        'TCL: getUserBank -> response.data',
        response.data.data.banks
      );
      console.log('TCL: getUserBank -> banks', banks);
      sessionStorage.setItem(BANKS, banks[0]);
      setBank(bank);
    }
    getUserBank();
  }, [accessToken, bank]);

  return bank;
}
