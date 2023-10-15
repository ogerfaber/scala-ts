// Generated by ScalaTS 0.5.17: https://scala-ts.github.io/scala-ts/

declare var exports: any;

export const nsTrainLine = exports;

import * as nsTransport from './Transport';
import type { Transport } from './Transport';

export const dependencyModules = [
  nsTransport,
];

export interface TrainLine extends Transport {
  name: string;
  startStationId: string;
  endStationId: string;
}

export function isTrainLine(v: any): v is TrainLine {
  return (
    ((typeof v['name']) === 'string') &&
    ((typeof v['startStationId']) === 'string') &&
    ((typeof v['endStationId']) === 'string')
  );
}
