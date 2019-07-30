import { promises } from 'dns';

export const baseURL: string = 'https://www.btgpactual.com/btgcode/api/';

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
  conta1 = '7DdvvjmAC05J3Jdn4RXCr5ipl4fqcQpn9g9Cw9gO'
}

export enum bankEnum {
  banco1 = 'banco1',
  banco2 = 'banco2',
  banco3 = 'banco3'
}

export const getMoneyMovementCard = async (bank: bankEnum, account: string) => {
  /*
    const endpointURL: string = `${bank}/money-movent/${account}/card`;
    const bankExtract: Response = await fetch(
    `${baseURL}${endpointURL}`,
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-api-key": account,
        }
    });
    const json: Array<Transaction> = await bankExtract.json();
    */
  const json: Array<Transaction> = JSON.parse(
    `[
        {
            "Bank": "banco1",
            "IdInvoice": "1982076b-8a54-46ee-8348-900408f7491d",
            "Account": "7DdvvjmAC05J3Jdn4RXCr5ipl4fqcQpn9g9Cw9gO",
            "IdCard": "5a5a2ac0-1ab4-4447-ba9e-b7c5a274cc01",
            "TypeTransaction": "Viagem",
            "Desc": "Passagem",
            "Amount": -419.31,
            "Id": "7534121b-e82b-4213-b91a-8dbe31e7ad3e",
            "Type": "Cartao",
            "Counterpart": "ToRBBtVLST3mGOs0ounFb5vSERvFLPNd4waVekFs",
            "CreatedAt": "2019-05-01T12:43:47"
        }
    ]`
  );
  return json;
};
