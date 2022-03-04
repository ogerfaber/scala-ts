// Generated by ScalaTS 0.5.11-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';

import * as nsTransport from './Transport';

// Validator for InterfaceDeclaration Foo
export const idtltFoo = idtlt.object({
  id: idtlt.number,
  namesp: idtlt.tuple(idtlt.number, idtlt.string),
  row: idtlt.tuple(idtlt.string, nsTransport.idtltTransport, idtlt.isoDate),
  score: idtlt.union(idtlt.number, idtlt.string),
  rates: idtlt.dictionary(idtlt.string, idtlt.number.optional()),
});

// Deriving TypeScript type from Foo validator
export type Foo = typeof idtltFoo.T;

export const idtltDiscriminatedFoo = idtlt.intersection(
  idtltFoo,
  idtlt.object({
    _type: idtlt.literal('Foo')
  })
);

// Deriving TypeScript type from idtltDiscriminatedFoo validator
export type DiscriminatedFoo = typeof idtltDiscriminatedFoo.T;

export const discriminatedFoo: (_: Foo) => DiscriminatedFoo = (v: Foo) => ({ _type: 'Foo', ...v });

export function isFoo(v: any): v is Foo {
  return (
    ((typeof v['id']) === 'number') &&
    (Array.isArray(v['namesp']) && v['namesp'].length == 2 && ((typeof v['namesp'][0]) === 'number') && ((typeof v['namesp'][1]) === 'string')) &&
    (Array.isArray(v['row']) && v['row'].length == 3 && ((typeof v['row'][0]) === 'string') && (v['row'][1] && nsTransport.isTransport(v['row'][1])) && (v['row'][2] && (v['row'][2] instanceof Date))) &&
    (((typeof v['score']) === 'number') || ((typeof v['score']) === 'string')) &&
    ((typeof v['rates']) == 'object' && Object.keys(v['rates']).every(key => ((typeof key) === 'string') && ((typeof v['rates'][key]) === 'number')))
  );
}