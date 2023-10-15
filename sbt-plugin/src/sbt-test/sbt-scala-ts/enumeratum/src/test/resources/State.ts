// Generated by ScalaTS 0.5.17: https://scala-ts.github.io/scala-ts/

declare var exports: any;

export const nsState = exports;

import * as nsAlabama from './Alabama';
import type { Alabama } from './Alabama';
import * as nsAlaska from './Alaska';
import type { Alaska } from './Alaska';

export const dependencyModules = [
  nsAlabama,
  nsAlaska,
];

export type State = Alabama | Alaska;

export const State = {
  "AL": nsAlabama.AlabamaInhabitant, 
  "AK": nsAlaska.AlaskaInhabitant
} as const;

export function isState(v: any): v is State {
  return (
    nsAlabama.isAlabama(v) ||
    nsAlaska.isAlaska(v)
  );
}
