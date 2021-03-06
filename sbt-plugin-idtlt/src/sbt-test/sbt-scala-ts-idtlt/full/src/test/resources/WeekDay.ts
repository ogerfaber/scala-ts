// Generated by ScalaTS 0.5.7-SNAPSHOT: https://scala-ts.github.io/scala-ts/
import * as idtlt from 'idonttrustlikethat';

// Validator for EnumDeclaration WeekDay
export const idtltWeekDay = idtlt.union(
  idtlt.literal('Mon'),
  idtlt.literal('Tue'),
  idtlt.literal('Wed'),
  idtlt.literal('Thu'),
  idtlt.literal('Fri'),
  idtlt.literal('Sat'),
  idtlt.literal('Sun'))

// Deriving TypeScript type from WeekDay validator
export type WeekDay = typeof idtltWeekDay.T;

export const idtltDiscriminatedWeekDay = idtlt.intersection(
  idtltWeekDay,
  idtlt.object({
    _type: idtlt.literal('WeekDay')
  })
);

// Deriving TypeScript type from idtltDiscriminatedWeekDay validator
export type DiscriminatedWeekDay = typeof idtltDiscriminatedWeekDay.T;

export const idtltWeekDayValues: Array<WeekDay> = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
];

export function isWeekDay(v: any): v is WeekDay {
   return idtltWeekDay.validate(v).ok;
}
