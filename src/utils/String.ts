import moment from 'moment';


export const formatNumberToMoney = (value: number) =>
  `${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL"
  })}`;

export const formatDateTime = (datetime: string) =>{
  const m: moment.Moment = moment(datetime);
  console.log(m)
  return m.format('hh:mm ddd DD/MM/YY');
}