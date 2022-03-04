// Generated by ScalaTS 0.5.11-SNAPSHOT: https://scala-ts.github.io/scala-ts/

import { Grade, isGrade } from './Grade';

export interface CaseClassBar {
  firstName: string;
  lastName: string;
  grade: Grade;
}

export function isCaseClassBar(v: any): v is CaseClassBar {
  return (
    ((typeof v['firstName']) === 'string') &&
    ((typeof v['lastName']) === 'string') &&
    (v['grade'] && isGrade(v['grade']))
  );
}
