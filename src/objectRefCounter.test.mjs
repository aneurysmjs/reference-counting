import objectRefCounter from './objectRefCounter';

describe('objectRefCounter', () => {
  describe('refCounter', () => {
    const refCounter = objectRefCounter();
    it('should have "add", "remove" and "getCount" methods', () => {
      expect(refCounter).toHaveProperty('add');
      expect(refCounter).toHaveProperty('remove');
      expect(refCounter).toHaveProperty('getCount');
    });
  });

  const objA = {
    prop: 1
  };
  
  it('should add a refences and decrease "count"', () => {
    const rc = objectRefCounter();
    rc.add(objA);
    rc.add(objA);
    rc.add(objA);
    const countObjA = rc.getCount(objA);
    expect(countObjA).toBe(3);
  });

  it('should remove a refence and decrease "count"', () => {
    const rc = objectRefCounter();

    rc.add(objA);
    rc.add(objA);
    rc.add(objA);

    rc.remove(objA);
    expect(rc.getCount(objA)).toBe(2);

    rc.remove(objA);
    expect(rc.getCount(objA)).toBe(1);

    rc.remove(objA);
    expect(rc.getCount(objA)).toBe(0);
  });
});