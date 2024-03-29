export const getDateToString = (date: Date) => {
  /***
   * Get MMM/YYYY
   */
  return `${getLiteralMonth(date.getMonth())}/${date.getFullYear()}`;
};

export function addMonthsUTC(date: Date, count: number) {
  if (date && count) {
    var m,
      d = (date = new Date(+date)).getUTCDate();

    date.setUTCMonth(date.getUTCMonth() + count, 1);
    m = date.getUTCMonth();
    date.setUTCDate(d);
    if (date.getUTCMonth() !== m) date.setUTCDate(0);
  }
  return date;
}

export const getLiteralMonth = (month: number) => {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Fev";
    case 2:
      return "Mar";
    case 3:
      return "Abr";
    case 4:
      return "Maio";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Ago";
    case 8:
      return "Set";
    case 9:
      return "Out";
    case 10:
      return "Nov";
    case 11:
      return "Dec";

    default:
      return "Invalid Month";
  }
};
