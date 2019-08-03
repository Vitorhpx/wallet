import axios from 'axios';

export interface Investment {
  bank: string;
  risk: string;
  expiryDate: string;
  tax: string;
  discriminator: string;
  id: string;
  productName: string;
  redemptionDate: string;
  aniversary: string;
}

export const getInvestments = (bankToken: string, bank: string) => {
  return axios
    .get(`https://www.btgpactual.com/btgcode/api/${bank}/investment`, {
      headers: { 'x-api-key': bankToken }
    })
    .then(response => {
      console.log('TCL: getInvestments -> response', response);
      return response;
    })
    .catch(error => {
      console.log('TCL: getInvestments -> error', error);
      return error;
    });
};
