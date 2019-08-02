import React, { useEffect } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { H1, H3 } from "../../components/atm.typography/typography.component";
import CategoryDetailRow from "../../components/mol.category-detail-row/category-detail-row.component";
import PieChart, {
  PieDataItem
} from "../../components/mol.pie-chart/pie-chart.component";
import { getOrders, OrderData } from "../../data-sources/order";
import {
  getSaldosGroupedbyType,
  historicoCategoriaMock,
  Saldo,
  saldosMock,
  getHistoricoPrevisão
} from "../../data-sources/wallet";
import { formatNumberToMoney } from "../../utils/String";
import { getInvestments, Investment } from "../../data-sources/investments";
import { groupBy, Dictionary } from "lodash";
import { getProductClassification } from "../../utils/API";

interface IPortfolioProps {}

interface Product {
  id: string;
  name: string;
  bank: string;
  risk: string;
  discriminator: string;
  classification: string;
  tax: string;
  value: number;
}

interface FundInfo {
  classification: string;
  tax: number;
  value: number;
}

const Portfolio: React.FunctionComponent<IPortfolioProps> = props => {
  const saldosGrouped = getSaldosGroupedbyType(saldosMock);
  const [
    ordersGroupedByClassification,
    set0rdersGroupedByClassification
  ] = React.useState<Dictionary<any>>();
  const [filteredData, setFilteredData] = React.useState<FundInfo[]>();
  const [investmentsData, setInvestmentsData] = React.useState<Investment[]>();
  const [fetchError, setFetchError] = React.useState();

  useEffect(() => {
    try {
      Promise.all([getOrders(), getInvestments()]).then(response => {
        const ordersGroupedByClassification = getOrdersbyClassification(
          response[0].data as OrderData[],
          response[1].data as Investment[]
        );
        set0rdersGroupedByClassification(ordersGroupedByClassification);

        const sortedData = sortData(ordersGroupedByClassification);
        setFilteredData(sortedData);
      });
    } catch (error) {
      setFetchError(error);
    }
  }, []);

  //TODO: Move to Backend
  //Refactor

  const data: PieDataItem[] = (filteredData || []).map(data => ({
    item: data.classification,
    value: data.value,
    tax: data.tax
  }));

  const [tax, patrimonio] = (filteredData || []).reduce(
    (previous: number[], curr: FundInfo, index, array) => {
      previous[0] = previous[0] + curr.value * curr.tax;
      previous[1] = previous[1] + curr.value;

      if (index === array.length - 1) {
        return [previous[0] / previous[1], previous[1]];
      } else {
        return previous;
      }
    },
    [0, 0]
  );

  const [selectedCell, setSelectedCell] = React.useState(-1);

  const handleCellClick = (index: number) => {
    if (index !== selectedCell) {
      setSelectedCell(index);
    } else {
      setSelectedCell(-1);
    }
  };

  return (
    <>
      {fetchError ? (
        <p>Erro ao acessar os dados</p>
      ) : (
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
              <H3>{`Rendimento: ${tax}%`}</H3>
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

                    {console.log(
                      "TCL: item.item",
                      ordersGroupedByClassification![item.item]
                    )}
                    {index === selectedCell && (
                      <CategoryDetailRow
                        categoryData={{
                          investments: ordersGroupedByClassification![
                            item.item
                          ].map((item: Product) => ({
                            name: item.name,
                            value: item.value
                          })),
                          graphData: getHistoricoPrevisão(
                            item.value,
                            item.tax,
                            5
                          ).map(item => ({
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
      )}
    </>
  );
};

export default React.memo(Portfolio);

function getOrdersbyClassification(
  orders: OrderData[],
  investments: Investment[]
) {
  const groupedOrders = groupBy(orders, "idProduto");
  const groupedInvestments = groupBy(investments, "id");
  const ordersById = Object.keys(groupedOrders).map(key => ({
    id: key,
    name: groupedInvestments[key][0].productName,
    bank: groupedInvestments[key][0].bank,
    risk: groupedInvestments[key][0].risk,
    classification: getProductClassification(groupedInvestments[key][0].risk),
    discriminator: groupedInvestments[key][0].discriminator,
    tax: groupedInvestments[key][0].tax,
    value: groupedOrders[key].reduce((sum: number, curr: OrderData) => {
      return sum + curr.valor;
    }, 0)
  }));
  const ordersGroupedByClassification = groupBy(ordersById, "classification");
  return ordersGroupedByClassification;
}

const sortData = (ordersGroupedByClassification: Dictionary<Product[]>) => {
  const data = Object.keys(ordersGroupedByClassification as Dictionary<
    Product[]
  >).map(key => ({
    classification: key,
    tax: ordersGroupedByClassification[key].reduce(
      (previous: number[], curr: Product, index, array) => {
        previous[0] = previous[0] + curr.value * parseFloat(curr.tax);
        previous[1] = previous[1] + curr.value;

        if (index === array.length - 1) {
          return [previous[0] / previous[1], 1];
        } else {
          return previous;
        }
      },
      [0, 0]
    )[0],
    value: ordersGroupedByClassification[key].reduce(
      (sum: number, curr: Product) => {
        return sum + curr.value;
      },
      0
    )
  }));
  return data;
};
