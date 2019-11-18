/**
 * @linkhttps://github.com/Microsoft/redux-dynamic-modules/blob/master/packages/redux-dynamic-modules-core/src/Utils/RefCounter.ts
 */
export default function objectRefCounter(equals, retained) {
  if (!equals) {
    equals = (a, b) => a === b;
  }

  if (!retained) {
    retained = () => false;
  }

  const objects = [];
  const counts = [];

  return {
    getCount: obj => {
      if (obj === undefined || obj === null) {
        return 0;
      }

      let index = objects.findIndex(o => o && equals(o, obj));
      if (index === -1) {
        return 0;
      }

      return counts[index];
    },
    add: obj => {
      if (obj === undefined || obj === null) {
        return;
      }
      
      let index = objects.findIndex(o => o && equals(o, obj));
      let count = 1;

      if (index === -1) {
        index = objects.length;
        objects.push(obj);
      } else {
        count = counts[index] + 1;
      }

      // If item is retained then keep it for inifinty
      if (retained(obj)) {
        count = Infinity;
      }
      counts[index] = count;
    },
    remove: obj => {
      if (retained(obj)) {
        return false;
      }

      let index = objects.findIndex(o => o && equals(o, obj));

      if (index === -1) {
        return false;
      }

      if (counts[index] === 1) {
        delete objects[index];
        delete counts[index];
        return true;
      }

      counts[index] = counts[index] - 1;

      return false;
    }
  };
}