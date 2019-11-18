import refManager from './refManager';

describe('refManager with WeakMap', () => {
  describe('refCounter', () => {
    const refCounter = refManager();
    it('should have "add", "remove" and "getCount" methods', () => {
      expect(refCounter).toHaveProperty('add');
      expect(refCounter).toHaveProperty('getCount');
    });
  });

  const objA = {
    prop: 1
  };
  
  it('should add a refence', () => {
    const rc = refManager();
    rc.add(objA);
    rc.add(objA);
    rc.add(objA);
    rc.add(objA);
    const countObjA = rc.getCount(objA);
    expect(countObjA).toBe(4);
  });

  it('should remove a refence', () => {
    const rc = refManager();
    rc.add(objA);
    rc.add(objA);
    rc.add(objA);
    rc.add(objA);

    rc.remove(objA);
    rc.remove(objA);
    rc.remove(objA);
    rc.remove(objA);
    const countObjA = rc.getCount(objA);
    expect(countObjA).toBe(0);
  });

});