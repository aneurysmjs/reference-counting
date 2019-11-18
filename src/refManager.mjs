import isNil from './utils/isNil.mjs';

export default function refManager() {

  const cache = new WeakMap();

  return {

    getCount(obj) {
      if (isNil(obj)) {
        return 0;
      }

      return cache.has(obj) ? cache.get(obj) : 0;
    },

    add(obj) {
      if (isNil(obj)) {
        return;
      }
      const item = cache.has(obj);
      let count = 1;

      if (!item) {
        cache.set(obj, count);
      } else {
        let objCount = cache.get(obj);
        cache.set(obj, objCount += 1);
      }
    },
    remove(obj) {
      const item = cache.has(obj);

      if (!item) {
        return false;
      }

      let objCount = cache.get(obj);
      cache.set(obj, objCount -= 1);

      if (objCount === 0) {
        cache.delete(obj);
        return true;
      }

      return false;
    }
  };
}