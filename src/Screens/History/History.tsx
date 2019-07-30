import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { Component } from 'react';
import {
  accounts,
  bankEnum,
  getMoneyMovementCard,
  Transaction
} from '../../data-sources/fetch';
import { formatDateTime, formatNumberToMoney } from '../../utils/String';

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
                  secondary={` ${formatDateTime(transaction.CreatedAt)}`}
                />
                <ListItemText
                  primary={`${transaction.Desc}`}
                  secondary={`${transaction.TypeTransaction}`}
                />
                <ListItemText primary={`${transaction.Bank}`} />
              </ListItem>
            )
          )}
        </List>
      </div>
    );
  }
}

export default History;
