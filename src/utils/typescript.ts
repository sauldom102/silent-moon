export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
