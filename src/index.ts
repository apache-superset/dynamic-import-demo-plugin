import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

const metadata = new ChartMetadata({
  description:
    'A chart plugin for Superset demonstrating current best practices',
  name: t('Hello World'),
  thumbnail,
  useLegacyApi: false,
});

console.log('this one is from hello world plugin');

export default class HelloWorldChartPlugin extends ChartPlugin {
  constructor() {
    super({
      loadChart: () => import('./Vis'),
      metadata,
      transformProps,
      controlPanel,
    });
  }
}
