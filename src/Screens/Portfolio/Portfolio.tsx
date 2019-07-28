import React, { Component } from "react";
import PieChart, {
  PieDataItem
} from "../../components/mol.pie-chart/pie-chart.component";
import { getSaldos } from "../../data-sources/wallet";
import { Grid, Row, Col } from "react-flexbox-grid";
import { H2, H3 } from "../../components/atm.typography/typography.component";
import { formatNumberToMoney } from "../../utils/String";
import { ListItemText, List, ListSubheader, ListItem } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AccountDetailRow from "../../components/mol.account-detail-row/account-detail-row.component";

interface IPortfolioProps {}

const Portfolio: React.FunctionComponent<IPortfolioProps> = props => {
  const data: PieDataItem[] = getSaldos().map(item => ({
    item: item.origem,
    value: item.valor
  }));
  const patrimonio = data.reduce((sum, curr) => {
    return sum + curr.value;
  }, 0);
  const [selectedCell, setSelectedCell] = React.useState(-1);

  const handleCellClick = (index: number) => {
    if (index !== selectedCell) {
      console.log(index);
      setSelectedCell(index);
    } else {
      setSelectedCell(-1);
    }
  };

  return (
    <>
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} lg={8}>
            <PieChart data={data} />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs>
            <H2>Patrimônio: {formatNumberToMoney(patrimonio)}</H2>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs>
            <H3>Rendimento: 1.22%</H3>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} md={8}>
            <List component="nav" aria-labelledby="nested-list-subheader">
              {data.map((item, index) => (
                <React.Fragment key={item.item}>
                  <ListItem button onClick={() => handleCellClick(index)}>
                    <ListItemText
                      primary={`${item.item}: ${formatNumberToMoney(
                        item.value
                      )}`}
                    />
                    {index === selectedCell ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  {index === selectedCell && <AccountDetailRow />}
                </React.Fragment>
              ))}
            </List>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Portfolio;
