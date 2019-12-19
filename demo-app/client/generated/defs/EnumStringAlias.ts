/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

export type EnumStringAlias = 'A' | 'B' | 'C:a' | 'hoge fuga' | 'hoge.fuga/hoge';

export const EnumStringAlias = {
  A: 'A' as EnumStringAlias,
  B: 'B' as EnumStringAlias,
  CA: 'C:a' as EnumStringAlias,
  HogeFuga: 'hoge fuga' as EnumStringAlias,
  HogeFugaHoge: 'hoge.fuga/hoge' as EnumStringAlias,
};
