import { promises } from "dns";

export const baseURL: string = "https://www.btgpactual.com/btgcode/api/";

export type Transaction = {
  Bank: string;
  IdInvoice: string;
  Account: string;
  IdCard: string;
  TypeTransaction: string;
  Desc: string;
  Amount: number;
  Id: string;
  Type: string;
  CreatedAt: string;
  PaymentDate: string;
};
export const formatTransactionPaymentDate = (paymentDate: string) => {
  const year = paymentDate.slice(0, 4);
  const month = paymentDate.slice(5, 7);
  const day = paymentDate.slice(8, 10);
  return `${day}/${month}/${year}`;
};
export enum accounts {
  conta1 = "7DdvvjmAC05J3Jdn4RXCr5ipl4fqcQpn9g9Cw9gO"
}

export enum bankEnum {
  banco1 = "banco1",
  banco2 = "banco2",
  banco3 = "banco3"
}

export const getMoneyMovementCard = async (bank: bankEnum, account: string) => {
  const endpointURL: string = `${bank}/card/${account}/invoice`;
  const bankExtract: Response = await fetch(`${baseURL}${endpointURL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Control-Acess-Origin": "*",
      "x-api-key": account
    }
  });
  const json: Array<Transaction> = await bankExtract.json();
  return json;
};
