import { ChartProps } from "@superset-ui/chart";

export interface DatasourceMetric {
  label: string;
  metric_name?: string;
  d3format?: string;
}

export type FormData = {
  fontSize?: string;
};

export type HelloWorldChartProps = ChartProps & {
  formData: FormData;
};

export default function transformProps(chartProps: HelloWorldChartProps) {
  const { width, height } = chartProps;

  console.log("chart props:", chartProps);

  return {
    width,
    height,
  };
}
