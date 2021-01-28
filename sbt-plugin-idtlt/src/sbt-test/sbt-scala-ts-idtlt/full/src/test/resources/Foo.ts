// Generated by ScalaTS 0.5.1-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';

import * as nsTransport from './Transport';

// Validator for InterfaceDeclaration Foo
export const idtltFoo = idtlt.object({
  rates: idtlt.dictionary(idtlt.string, idtlt.number),
  score: idtlt.union(idtlt.number, idtlt.string),
  row: idtlt.tuple(idtlt.string, nsTransport.idtltTransport, idtlt.isoDate),
  namesp: idtlt.tuple(idtlt.number, idtlt.string),
  id: idtlt.number,
});

export const idtltDiscriminatedFoo = idtlt.intersection(
  idtltFoo,
  idtlt.object({
    '_type': idtlt.literal('Foo')
  })
);

// Deriving TypeScript type from Foo validator
export type Foo = typeof idtltFoo.T;
