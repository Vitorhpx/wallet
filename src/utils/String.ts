import moment from 'moment';

export const formatNumberToMoney = (value: number) =>
  `${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL"
  })}`;

export const formatDateTime = (datetime: string) =>{
  const timestamp: number = Date.parse(datetime);
  
}