import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { Component, useEffect } from 'react';
import { Transaction } from '../../data-sources/fetch';
import { getOrders, OrderData } from '../../data-sources/order';
import { formatDateTime, formatNumberToMoney } from '../../utils/String';
import { ArrowUpward } from '@material-ui/icons';
import { ListItemIcon, Grid } from '@material-ui/core';

interface IHistoryProps {}

const History: React.FunctionComponent<IHistoryProps> = props => {
  const [orders, setOrders] = React.useState<OrderData[]>([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await getOrders();
      setOrders(response.data as OrderData[]);
    }
    fetchAPI();
  }, []);

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
                <ListItemText
                  primary={`${transaction.Id}`}
                  secondary={`${transaction.bank}`}
                />
              </ListItem>
            ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default History;
