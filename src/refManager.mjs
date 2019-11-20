import isNil from './utils/isNil';

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
    }
  };
}