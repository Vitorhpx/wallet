import { promises } from "dns";

export const baseURL: string = "https://btgpactual.com/btgcode/api/";

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
}

export enum accounts {
    conta1 = "7DdvvjmAC05J3Jdn4RXCr5ipl4fqcQpn9g9Cw9gO"
}

export enum bankEnum {
    banco1 = "banco1",
    banco2 = "banco2",
    banco3 = "banco3"
}

export const getMoneyMovementCard = async (bank: bankEnum, account: string) => {
    const endpointURL: string = `${bank}/money-movent/${account}/card`;
    const bankExtract: Response = await fetch(
    `${baseURL}${endpointURL}`,
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept-Control-Acess-Origin": "*",
            "x-api-key": account,
        }
    });
    const json: Array<Transaction> = await bankExtract.json();
    return json;
}