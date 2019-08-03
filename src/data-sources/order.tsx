import axios from 'axios';

export interface OrderData {
  data_ordem: string;
  bank: string;
  valor: number;
  account: string;
  discriminator: string;
  idProduto: string;
  Id: string;
}

export const getOrders = (bankToken: string, bank: string) => {
  return axios
    .get(`http://www.btgpactual.com/btgcode/api/${bank}/orders/${bankToken}`, {
      headers: { 'x-api-key': bankToken }
    })
    .then(response => {
      console.log('TCL: getOrders -> response', response);
      return response;
    })
    .catch(error => {
      console.log('TCL: getOrders -> error', error);
      return error;
    });
};
