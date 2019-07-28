import * as React from "react";
import { Chart, Axis, Geom, Tooltip } from "bizcharts";
import { Color } from "../../utils/Constants";

interface ILineChartProps {
  data: {
    x: string;
    y: number;
  }[];
}

const LineChart: React.FunctionComponent<ILineChartProps> = props => {
  const data = props.data;
  const scale = {
    value: { min: 0 },
    year: { range: [0, 1] }
  };
  return (
    <Chart height={350} data={data} scale={scale} forceFit>
      <Axis />
      <Axis name="Valor" />
      <Tooltip crosshairs={{ type: "y" }} />
      <Geom type="line" position="x*y" size={2} color={`${Color.primary}`} />
      <Geom
        type="point"
        position="x*y"
        size={4}
        shape={"circle"}
        color={`${Color.primary}`}
        style={{ stroke: "#fff", lineWidth: 1 }}
      />
    </Chart>
  );
};

export default LineChart;
