import React, { useEffect } from 'react';
import { BANK_TOKEN } from '../utils/API';
import { getUserInfo } from '../data-sources/users';

export function useBankToken(accessToken: string) {
  const [bankToken, setBankToken] = React.useState<string>('');

  useEffect(() => {
    async function getUserBank() {
      const response = await getUserInfo(accessToken);
      const bankToken = response.data.bankToken;
      sessionStorage.setItem(BANK_TOKEN, bankToken);
      setBankToken(bankToken);
    }
    if (sessionStorage.getItem(BANK_TOKEN) !== null) {
      setBankToken(sessionStorage.getItem(BANK_TOKEN) as string);
    } else {
      getUserBank();
    }
  }, [accessToken]);

  return bankToken;
}
