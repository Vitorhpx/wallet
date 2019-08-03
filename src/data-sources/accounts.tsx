import axios from 'axios';

export interface BankData {
  Bank: string;
  Amount: number;
  Id: string;
  Name: string;
}

export const getAccounts = (bankToken: string, bank: string) => {
  return axios
    .get(
      `https://www.btgpactual.com/btgcode/api/${bank}/accounts/${bankToken}`,
      {
        headers: { 'x-api-key': bankToken }
      }
    )
    .then(response => {
      console.log('TCL: getOrders -> response', response);
      return response;
    })
    .catch(error => {
      console.log('TCL: getOrders -> error', error);
      return error;
    });
};
