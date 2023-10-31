export type FlattenObjectValues<T> = T extends object
  ? { [K in keyof T]: FlattenObjectValues<T[K]> }[keyof T]
  : T

export type Paths<T> = T extends object ? { [K in keyof T]:
  `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}`
}[keyof T] : never
