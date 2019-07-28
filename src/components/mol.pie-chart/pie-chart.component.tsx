import { Axis, Chart, Coord, Geom, Label, Tooltip } from "bizcharts";
import * as React from "react";
import { ChartWrapper } from "./pie-chart.styled";
import { Spacing } from "../../utils/Constants";

export interface PieDataItem {
  item: string;
  value: number;
}

interface IPieChartProps {
  data: PieDataItem[];
}

const PieChart: React.FunctionComponent<IPieChartProps> = props => {
  const dataSum = props.data.reduce((sum, curr) => {
    return sum + curr.value;
  }, 0);
  const transformedData = props.data.map(item => ({
    item: item.item,
    percent: item.value / dataSum
  }));

  const cols = {
    percent: {
      formatter: (val: any) => {
        val = Math.round(val * 100) + "%";
        return val;
      }
    }
  };

  return (
    <ChartWrapper>
      <Chart
        height={window.innerHeight / 2}
        data={transformedData}
        renderer="svg"
        scale={cols}
        forceFit
        padding={parseInt(Spacing.XLarge, 10)}
      >
        <Coord type="theta" radius={0.75} />
        <Axis name="percent" />
        <Geom type="intervalStack" position="percent" color="item">
          <Label
            content="percent"
            formatter={(val, item) => {
              return getLabelName(item.point.item) + ": " + val;
            }}
          />
        </Geom>
      </Chart>
    </ChartWrapper>
  );
};

const getLabelName = (name: string) => {
  switch (name) {
    case "Fundo de Risco":
      return "Arrojado";
    case "Fundo de Emergência":
      return "Emergência";
    default:
      return name;
  }
};

export default PieChart;
