import objectRefCounter from './objectRefCounter';

const refCounter = objectRefCounter();
describe('objectRefCounter', () => {
  it('should have "add", "remove" and "getCount" methods', () => {
    expect(refCounter).toHaveProperty('add');
    expect(refCounter).toHaveProperty('remove');
    expect(refCounter).toHaveProperty('getCount');
  });
});