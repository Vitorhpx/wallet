export const AUTH_TOKEN = 'auth-token';
export const BANK_TOKEN = 'bank-token';
export const BANKS = 'banks';

export const getProductClassification = (key: string) => {
  //For now, productClassification is made in front and local and it is very simple now, in the future it must be done in the back for each product
  return productDictionary[key];
};

export const productDictionary: any = {
  '259ad8ac-57b7-4d33-8e75-46cf5c5c28e3': 'Emergência',
  'a6fb1534-0a6a-4808-b7eb-dfa1c854c840': 'Emergência',
  '4882b6d1-e24f-4dab-924e-4428a7c93f11': 'Emergência',
  'f8ad1f1d-1b50-4d08-891b-300a206de68a': 'Emergência',
  '73db503f-c780-448c-a6a8-05d2837ff6ff': 'Emergência',
  'f068ebb1-c9c0-45b0-b1ca-84356140186b': 'Emergência',
  '54e01515-dc7f-470f-8f00-8603c8f00686': 'Emergência',
  '259ad8ac-57b7-4d33-8e75-46cf5c5c28e2': 'Fundo de investimentos',
  'dd18b2ad-756c-4157-b3ee-802d2da2cd05': 'Fundo de investimentos',
  'd39f44c2-121c-43ba-a15b-33388af0be46': 'Fundo de investimentos',
  '88a79fec-6fa5-411c-8f2e-c21ba9ece5fc': 'Fundo de investimentos',
  '4882b6d1-e24f-4dab-924e-4428a7c93f14': 'Fundo de investimentos',
  'c0742bc5-7a0f-4c0a-826f-1a4d019abde2': 'Fundo de investimentos',
  '1670e0df-e3b0-4bf6-acd7-3f656bc29bb1': 'Fundo de investimentos',
  'a0e64e22-cfef-44c6-ab5c-742119dc8889': 'Fundo de investimentos'
};
