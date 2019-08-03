import axios from 'axios';

export interface BankData {
  Bank: string;
  Amount: number;
  Id: string;
  Name: string;
}

export const getAccounts = () => {
  return axios
    .get(
      `https://www.btgpactual.com/btgcode/api/banco3/accounts/UCm7mbAn7377I4tZeRvBn9QnCxZxwGLn1ThepFj2`,
      {
        headers: { 'x-api-key': 'UCm7mbAn7377I4tZeRvBn9QnCxZxwGLn1ThepFj2' }
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
