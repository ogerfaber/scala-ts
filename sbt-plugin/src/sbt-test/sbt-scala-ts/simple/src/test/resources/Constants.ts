// Generated by ScalaTS 0.5.11-SNAPSHOT: https://scala-ts.github.io/scala-ts/

import { Grade, isGrade } from './Grade';

export class Constants {
  public code: number = 1;

  public name: string = "foo";

  public LowerGrade: Grade = 0;

  public list: ReadonlyArray<Grade> = [ this.LowerGrade ];

  public set: ReadonlySet<string> = new Set([ "lorem", "ipsum" ]);

  public readonly dict: { [key: string]: string } = { "A": "value #1", "B": this.name };

  public listOfDict: ReadonlyArray<{ [key: string]: string }> = [ { "title": "Foo", "description": "..." }, { "title": "Bar", "description": "..." } ];

  private static instance: Constants;

  private constructor() {}

  public static getInstance() {
    if (!Constants.instance) {
      Constants.instance = new Constants();
    }

    return Constants.instance;
  }
}

export const ConstantsInhabitant: Constants = Constants.getInstance();

export function isConstants(v: any): v is Constants {
  return (v instanceof Constants) && (v === ConstantsInhabitant);
}
