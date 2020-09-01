import {
  getUrlParam,
} from '../src/index';

describe('url取参', () => {
  test('url为空', () => {
    expect(getUrlParam('a','')).toBe('');
  })
  test('url无?', () => {
    expect(getUrlParam('a','www.taobao.com')).toBe('');
  })
  test('参数为空', () => {
    expect(getUrlParam('a','www.taobao.com?a=1')).toBe('1');
  })
});