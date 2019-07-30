import React, { Component } from 'react';
import {
  Transaction,
  getMoneyMovementCard,
  bankEnum,
  accounts,
  formatTransactionPaymentDate
} from '../../data-sources/moneyMovement';

import { formatNumberToMoney } from '../../utils/String';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Divider } from '@material-ui/core';
import { H1 } from '../../components/atm.typography/typography.component';

type HistoryState = {
  transactions: Array<Transaction>;
};

class History extends Component<{}, HistoryState> {
  constructor(props: object) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  async componentDidMount() {
    console.log(this.state);
    if (this.state.transactions.length === 0) {
      const bank1History: Array<Transaction> = await getMoneyMovementCard(
        bankEnum.banco1,
        accounts.conta1
      );
      this.setState({ transactions: bank1History });
    }
  }

  render() {
    return (
      <div>
        <List component='nav' aria-labelledby='nested-list-subheader'>
          {this.state.transactions.map(
            (transaction: Transaction, key: number) => (
              <ListItem key={key}>
                <ListItemText
                  primary={`${formatNumberToMoney(transaction.Amount)}`}
                  secondary={` ${transaction.CreatedAt}`}
                />
              </ListItem>
            )
          )}
        </List>
      </div>
    );
  }
}

export default History;
