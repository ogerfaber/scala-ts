// Generated by ScalaTS 0.5.9-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';

import * as nsAlabama from './Alabama';
import * as nsAlaska from './Alaska';

// Validator for UnionDeclaration State
export const idtltState = idtlt.union(
  nsAlabama.idtltDiscriminatedAlabama,
  nsAlaska.idtltDiscriminatedAlaska);

// Deriving TypeScript type from State validator
export type State = typeof idtltState.T;

export const idtltDiscriminatedState = idtlt.intersection(
  idtltState,
  idtlt.object({
    _type: idtlt.literal('State')
  })
);

// Deriving TypeScript type from idtltDiscriminatedState validator
export type DiscriminatedState = typeof idtltDiscriminatedState.T;

export const idtltStateKnownValues: Array<State> = [
  "AL", "AK"
];

export function isState(v: any): v is State {
  return (
    nsAlabama.isAlabama(v) ||
    nsAlaska.isAlaska(v)
  );
}
