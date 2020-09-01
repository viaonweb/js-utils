import {
  get,
} from '../src/index';
const obj = {
  feature: {
    target: 100
  }
}
describe('get取默认值', () => {
  test('get', () => {
    expect(get(obj,'feature.target', '')).toBe(100);
  })
  test('get', () => {
    expect(get(obj,'feature.none', '')).toBe('');
  })
});