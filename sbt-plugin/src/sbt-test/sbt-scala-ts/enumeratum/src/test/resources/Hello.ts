// Generated by ScalaTS 0.5.11: https://scala-ts.github.io/scala-ts/

export const HelloInhabitant = 'Hello';

export type Hello = typeof HelloInhabitant;

export function isHello(v: any): v is Hello {
  return HelloInhabitant == v;
}
