/**
 * A typesafe implementation of `Object.keys`
 */
export const keys = <GObj extends object, GKey extends Extract<keyof GObj, string>>(obj: GObj): GKey[] =>
  Object.keys(obj) as GKey[];

/**
 * A more lenient typed version of `Array.prototype.includes` which allow less
 * specific types to be checked.
 */
export const includes = <GType>(
  array: GType[] | readonly GType[],
  item: unknown,
  fromIndex?: number,
): item is GType => array.includes(item as GType, fromIndex);

/**
 * A typesafe implementation of `Object.entries`
 *
 * Taken from
 * https://github.com/biggyspender/ts-entries/blob/master/src/ts-entries.ts
 */
export const entries = <
  GType extends object,
  GKey extends Extract<keyof GType, string>,
  GValue extends GType[GKey],
  GEntry extends [GKey, GValue]
>(
  obj: GType,
): GEntry[] => Object.entries(obj) as GEntry[];

/**
 * A typesafe implementation of `Object.values`
 */
export const values = <
  GType extends object,
  GKey extends Extract<keyof GType, string>,
  GValue extends GType[GKey]
>(
  obj: GType,
): GValue[] => Object.values(obj) as GValue[];
