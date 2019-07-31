import { List, ListItem, ListItemText } from '@material-ui/core';
import * as React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { getDateToString } from '../../utils/Date';
import { formatNumberToMoney } from '../../utils/String';
import LineChart from '../mol.line-chart/line-chart.component';
import { ListWrapper } from './category-detail-row.style';

interface CategoryData {
  investments: {
    name: string;
    value: number;
  }[];
  graphData: {
    date: Date;
    value: number;
  }[];
}

interface ICategoryDetailRowProps {
  categoryData: CategoryData;
}

const CategoryDetailRow: React.FunctionComponent<
  ICategoryDetailRowProps
> = props => {
  return (
    <Row>
      <Col xs={12} md={4}>
        <ListWrapper>
          <List>
            {props.categoryData.investments.map(investment => (
              <ListItem key={investment.name}>
                <ListItemText
                  secondary={`${investment.name}: ${formatNumberToMoney(
                    investment.value
                  )}`}
                />
              </ListItem>
            ))}
          </List>
        </ListWrapper>
      </Col>
      <Col xs={12} md={8}>
        <LineChart
          data={props.categoryData.graphData.map(graphItem => ({
            x: getDateToString(graphItem.date),
            y: graphItem.value
          }))}
        />
      </Col>
    </Row>
  );
};

export default CategoryDetailRow;
