// Generated by ScalaTS 0.5.2-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';

import * as nsTrainLine from './TrainLine';
import * as nsBusLine from './BusLine';

// Validator for UnionDeclaration Transport
export const idtltTransport = idtlt.union(
  nsBusLine.idtltDiscriminatedBusLine,
  nsTrainLine.idtltDiscriminatedTrainLine);

// Fields are ignored: name

export const idtltDiscriminatedTransport = idtlt.intersection(
  idtltTransport,
  idtlt.object({
    '_type': idtlt.literal('Transport')
  })
);

// Deriving TypeScript type from Transport validator
export type Transport = typeof idtltTransport.T;
