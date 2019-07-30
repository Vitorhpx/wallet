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
    Counterpart: string;
}

export type CardData = {
    Bank: string;
    Account: string;
    CardNumber: string;
    CreditLimit: number;
    Id: string;
    PaymentDay: string;
    CreatedAt: string;
}

export type Investment = {
    bank: string;
    risk: string;
    expiryDate: string;
    id: string;
    redemptionDate: string;
    productName: string;
}

export type Order = {
    data_ordem: string;
    account: string;
    bank: string;
    valor: number;
    idProduto: string;
    discriminatior: string;
    Id: string;
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
    ]`); 
    return json;
}

export const getCard = async (bank: bankEnum, account: string) => {
    /*
    const endpointURL: string = `${bank}/card/${account}/`;
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
    const json: Array<CardData> = JSON.parse(
    `[
        {
            "Bank": "banco1",
            "Account": "Am2WAL3Pcr7NWuse9jfHr2NcKPeBIMy9EoqIXb80",
            "CardNumber": "5170923378999441",
            "CreditLimit": 10000,
            "Id": "cf7d79ae-9083-4454-a176-6937ea730cf6",
            "PaymentDay": "01",
            "CreatedAt": "\"2019-06-24T18:07:18.186Z\""
        }
    ]`);
    return json;
}

export const getInvestments = async (bank: bankEnum) => {
    /*
    const endpointURL: string = `${bank}/investment`;
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
    const json: Array<Investment> = JSON.parse(
    `[{
        "bank": "banco3",
        "risk": "Conservador",
        "expiryDate": "2020-06-24",
        "tax": "0.85",
        "discriminator": "investment",
        "id": "f068ebb1-c9c0-45b0-b1ca-84356140186b",
        "redemptionDate": "D+0",
        "productName": "Fundo DI"
    },
    {
        "bank": "banco3",
        "risk": "Moderado",
        "expiryDate": "2020-06-24",
        "tax": "0.55",
        "discriminator": "investment",
        "id": "a6fb1534-0a6a-4808-b7eb-dfa1c854c840",
        "redemptionDate": "D+3",
        "productName": "Fundo Cambial"
    }]`);
}

export const getOrders = async (bank: bankEnum, account: string) => {
    /*
    const endpointURL: string = `${bank}/orders/${account}`;
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
    const json: Array<Order> = JSON.parse(
    `[
        {
           "data_ordem": "2016-05-01",
           "account": "X6XPMTOUOvmh4xzKHvbS6OKLPEYMHEh985pcHJD0",
           "bank": "banco1",
           "valor": 300000,
           "idProduto": "259ad8ac-57b7-4d33-8e75-46cf5c5c28e3",
           "discriminator": "investment",
           "Id": "4882b6d1-e24f-4dab-924e-4428a7c93f13"
        },
        {
           "data_ordem": "2017-06-01",
           "account": "X6XPMTOUOvmh4xzKHvbS6OKLPEYMHEh985pcHJD0",
           "bank": "banco1",
           "valor": 200,
           "idProduto": "259ad8ac-57b7-4d33-8e75-46cf5c5c28e2",
           "discriminator": "loan",
           "Id": "4882b6d1-e24f-4dab-924e-5536a7c93f13"
        }
     ]`);
     return json;
}
