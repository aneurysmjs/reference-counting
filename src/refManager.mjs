
export default function refManager(equals, retained) {
  
  if (!equals) {
    equals = (a, b) => a === b;
  }

  if (!retained) {
    retained = () => false;
  }

  const cache = new WeakMap();

  return {

    getCount(obj) {
      if (obj === undefined || obj === null) {
        return 0;
      }

      return cache.has(obj) ? cache.get(obj) : 0;
    },

    add(obj) {
      if (obj === undefined || obj === null) {
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