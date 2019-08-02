import { addMonthsUTC } from '../utils/Date';

export interface Saldo {
  origem: string;
  tipo: 'Saldo' | 'Fundo de Emergência' | 'Fundo de Risco';
  valor: number;
}

export const saldosMock: Saldo[] = [
  {
    origem: 'Saldo',
    tipo: 'Saldo',
    valor: 1200
  },
  {
    origem: 'BTG Fundo 1',
    tipo: 'Fundo de Emergência',
    valor: 2509
  },
  {
    origem: 'BTG Fundo 2',
    tipo: 'Fundo de Emergência',
    valor: 6000
  },
  {
    origem: 'BTG Fundo 3',
    tipo: 'Fundo de Risco',
    valor: 2344
  },
  {
    origem: 'BTG Fundo 4',
    tipo: 'Fundo de Risco',
    valor: 1234
  }
];

export interface SaldoMensal {
  saldo: number;
  data: Date;
}

export const historicoCategoriaMock: SaldoMensal[] = [
  {
    saldo: 100,
    data: new Date(2019, 0, 1)
  },
  {
    saldo: 200,
    data: new Date(2019, 1, 1)
  },
  {
    saldo: 500,
    data: new Date(2019, 2, 1)
  },
  {
    saldo: 700,
    data: new Date(2019, 3, 1)
  },
  {
    saldo: 600,
    data: new Date(2019, 4, 1)
  },
  {
    saldo: 850,
    data: new Date(2019, 5, 1)
  }
];

export const getHistoricoPrevisão = (
  todayMoney: number,
  tax: number,
  months: number
) => {
  return Array(months)
    .fill(1)
    .map((_, index) => {
      const today = new Date();
      return {
        saldo: todayMoney * (1 + tax / 100) ** index,
        data: addMonthsUTC(today, index)
      };
    });
};

export const getSaldosGroupedbyType = (saldos: Saldo[]) => {
  var groups = {} as any;
  saldos.forEach(function(item) {
    var list = groups[item.tipo];
    if (list) {
      list.push(item);
    } else {
      groups[item.tipo] = [item];
    }
  });
  return groups;
};
