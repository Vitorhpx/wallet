import { Grid, ListItemIcon } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ArrowUpward } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { getOrders, OrderData } from '../../data-sources/order';
import { AUTH_TOKEN, BANK_TOKEN } from '../../utils/API';
import { formatDateTime, formatNumberToMoney } from '../../utils/String';
import { useBank } from '../../hooks/useBank';

interface IHistoryProps {}

const History: React.FunctionComponent<IHistoryProps> = props => {
  const [orders, setOrders] = React.useState<OrderData[]>([]);
  const authToken = sessionStorage.getItem(AUTH_TOKEN);
  const bankToken = sessionStorage.getItem(BANK_TOKEN);
  // const bank = useBank(authToken as string);
  const bank = 'banco1';

  useEffect(() => {
    async function fetchAPI() {
      const response = await getOrders(bankToken as string, bank);
      setOrders(response.data as OrderData[]);
    }
    fetchAPI();
  }, [bankToken, bank]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <List component='nav' aria-labelledby='nested-list-subheader'>
          {orders &&
            orders.map((transaction: OrderData, key: number) => (
              <ListItem key={key}>
                <ListItemIcon>
                  <ArrowUpward />
                </ListItemIcon>
                <ListItemText primary={`Investimento`} />
                <ListItemText
                  primary={`${formatNumberToMoney(transaction.valor)}`}
                  secondary={` ${formatDateTime(transaction.data_ordem)}`}
                />
              </ListItem>
            ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default History;
