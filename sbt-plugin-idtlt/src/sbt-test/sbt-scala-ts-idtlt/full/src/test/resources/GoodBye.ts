// Generated by ScalaTS 0.5.18-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';
export const _externalDependencyModules = [idtlt];

declare var exports: any;

export const nsGoodBye = exports;

// Validator for SingletonDeclaration GoodBye
export const idtltGoodBye = idtlt.literal('GoodBye')

// Super-type declaration Greeting is ignored
export const idtltDiscriminatedGoodBye = idtltGoodBye;

// Deriving TypeScript type from GoodBye validator
export type GoodBye = typeof idtltGoodBye.T;

export const GoodByeInhabitant: GoodBye = 'GoodBye';

export function isGoodBye(v: any): v is GoodBye {
  return idtltGoodBye.validate(v).ok;
}
