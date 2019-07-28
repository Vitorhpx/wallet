import { Axis, Chart, Coord, Geom, Label } from "bizcharts";
import * as React from "react";

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
    <Chart
      height={window.innerHeight / 2}
      data={transformedData}
      renderer="svg"
      scale={cols}
      forceFit
    >
      <Coord type="theta" radius={0.75} />
      <Axis name="percent" />
      <Geom type="intervalStack" position="percent" color="item">
        <Label
          content="percent"
          formatter={(val, item) => {
            return item.point.item + ": " + val;
          }}
        />
      </Geom>
    </Chart>
  );
};

export default PieChart;
