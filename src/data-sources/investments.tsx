import axios from "axios";

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

export const getInvestments = () => {
  return axios
    .get(`https://www.btgpactual.com/btgcode/api/banco1/investment`, {
      headers: { "x-api-key": "UCm7mbAn7377I4tZeRvBn9QnCxZxwGLn1ThepFj2" }
    })
    .then(response => {
      console.log("TCL: getInvestments -> response", response);
      return response;
    })
    .catch(error => {
      console.log("TCL: getInvestments -> error", error);
      return error;
    });
};
