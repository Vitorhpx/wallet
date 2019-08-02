import axios from "axios";

export interface OrderData {
  data_ordem: Date;
  bank: string;
  valor: number;
  account: string;
  discriminator: string;
  idProduto: string;
  Id: string;
}

export const getOrders = () => {
  return axios
    .get(
      `https://www.btgpactual.com/btgcode/api/banco1/orders/UCm7mbAn7377I4tZeRvBn9QnCxZxwGLn1ThepFj2`,
      { headers: { "x-api-key": "UCm7mbAn7377I4tZeRvBn9QnCxZxwGLn1ThepFj2" } }
    )
    .then(response => {
      console.log("TCL: getOrders -> response", response);
      return response;
    })
    .catch(error => {
      console.log("TCL: getOrders -> error", error);
      return error;
    });
};
