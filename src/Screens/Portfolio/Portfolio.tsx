import React, { Component } from "react";
import PieChart, {
  PieDataItem
} from "../../components/mol.pie-chart/pie-chart.component";
import {
  saldosMock,
  getSaldosGroupedbyType,
  Saldo,
  historicoCategoriaMock
} from "../../data-sources/wallet";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  H2,
  H3,
  H1
} from "../../components/atm.typography/typography.component";
import { formatNumberToMoney } from "../../utils/String";
import {
  ListItemText,
  List,
  ListSubheader,
  ListItem,
  Divider
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CategoryDetailRow from "../../components/mol.category-detail-row/category-detail-row.component";

interface IPortfolioProps {}

const Portfolio: React.FunctionComponent<IPortfolioProps> = props => {
  const saldosGrouped = getSaldosGroupedbyType(saldosMock);
  const data: PieDataItem[] = Object.keys(saldosGrouped).map(key => ({
    item: key,
    value: saldosGrouped[key].reduce((sum: number, curr: Saldo) => {
      return sum + curr.valor;
    }, 0)
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
            <H1>Patrimônio: {formatNumberToMoney(patrimonio)}</H1>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs>
            {/* TODO: Get real data */}
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
                  {index === selectedCell && (
                    <CategoryDetailRow
                      categoryData={{
                        investments: (saldosGrouped[item.item] as Saldo[]).map(
                          item => ({ name: item.origem, value: item.valor })
                        ),
                        graphData: historicoCategoriaMock.map(item => ({
                          date: item.data,
                          value: item.saldo
                        }))
                      }}
                    />
                  )}
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default React.memo(Portfolio);
