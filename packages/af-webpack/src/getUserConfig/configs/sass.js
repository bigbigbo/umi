import assert from 'assert';
import isPlainObject from 'is-plain-object';

export default function() {
  return {
    name: 'sass',
    validate(val) {
      assert(
        isPlainObject(val),
        `The sass config must be Plain Object, but got ${val}`,
      );
    },
  };
}
