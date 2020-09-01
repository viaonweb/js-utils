import {
  compareVersion,
} from '../src/index';
describe('版本比较测试', () => {
  test('大于版本号', () => {
    expect(compareVersion('1.0.3', '1.0.2')).toBe(1);
  });
  test('小于版本号', () => {
    expect(compareVersion('1.0.2', '1.0.3')).toBe(-1);
  });
  test('等于版本号', () => {
    expect(compareVersion('1.0.1', '1.0.1')).toBe(0);
  });
  test('版本号长度不同时候 小于版本号', () => {
    expect(compareVersion('1.0.1.9', '1.0.2')).toBe(-1);
  });
  test('版本号长度不同时候 大于版本号', () => {
    expect(compareVersion('1.0.4', '1.0.3.9')).toBe(1);
  });
  test('版本号长度不同时候 等于版本号', () => {
    expect(compareVersion('1.0.0', '1.0.0.0')).toBe(0);
  });
})