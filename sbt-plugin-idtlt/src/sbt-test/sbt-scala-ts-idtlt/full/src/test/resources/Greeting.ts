// Generated by ScalaTS 0.5.2-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';

import * as nsWhatever from './Whatever';
import * as nsHi from './Hi';
import * as nsBye from './Bye';
import * as nsHello from './Hello';
import * as nsGoodBye from './GoodBye';

// Validator for UnionDeclaration Greeting
export const idtltGreeting = idtlt.union(
  nsBye.idtltDiscriminatedBye,
  nsGoodBye.idtltDiscriminatedGoodBye,
  nsHello.idtltDiscriminatedHello,
  nsHi.idtltDiscriminatedHi,
  nsWhatever.idtltDiscriminatedWhatever);

export const idtltDiscriminatedGreeting = idtlt.intersection(
  idtltGreeting,
  idtlt.object({
    '_type': idtlt.literal('Greeting')
  })
);

// Deriving TypeScript type from Greeting validator
export type Greeting = typeof idtltGreeting.T;
