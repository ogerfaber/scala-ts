// Generated by ScalaTS 0.5.18-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';
export const _externalDependencyModules = [idtlt];

declare var exports: any;

export const nsBarNum = exports;

// Validator for SingletonDeclaration BarNum
export const idtltBarNum = idtlt.literal('BarNum')

// Super-type declaration Feature is ignored
export const idtltDiscriminatedBarNum = idtltBarNum;

// Deriving TypeScript type from BarNum validator
export type BarNum = typeof idtltBarNum.T;

export const BarNumInhabitant: BarNum = 'BarNum';

export function isBarNum(v: any): v is BarNum {
  return idtltBarNum.validate(v).ok;
}
