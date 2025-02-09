// Generated by ScalaTS 0.5.18-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';
export const _externalDependencyModules = [idtlt];

declare var exports: any;

export const nsNamedFeature = exports;

import * as nsFeature from './Feature';

export const dependencyModules = [
  nsFeature,
];

// Validator for InterfaceDeclaration NamedFeature
export const idtltNamedFeature = idtlt.object({
  name: idtlt.string,
  feature: nsFeature.idtltFeature,
});

// Deriving TypeScript type from NamedFeature validator
export type NamedFeature = typeof idtltNamedFeature.T;

export const idtltDiscriminatedNamedFeature = idtlt.intersection(
  idtltNamedFeature,
  idtlt.object({
    _type: idtlt.literal('NamedFeature')
  })
);

// Deriving TypeScript type from idtltDiscriminatedNamedFeature validator
export type DiscriminatedNamedFeature = typeof idtltDiscriminatedNamedFeature.T;

export const discriminatedNamedFeature: (_: NamedFeature) => DiscriminatedNamedFeature = (v: NamedFeature) => ({ _type: 'NamedFeature', ...v });

export function isNamedFeature(v: any): v is NamedFeature {
  return (
    ((typeof v['name']) === 'string') &&
    (v['feature'] && nsFeature.isFeature(v['feature']))
  );
}
