import classes, {scopedClassMaker} from '../classes';

describe('classes', () => {
  it('接受1个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受 undefined 结果不会有空格或 undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受 各种奇怪的值', () => {
    const result = classes('a', '中文', false, null);
    expect(result).toEqual('a 中文');
  });
  it('接受 0 个参数', () => {
    const result = classes();
    expect(result).toEqual('');
  });
});

describe('scopedClassMaker', () => {
  it('接受字符串或对象', () => {
    const sc = scopedClassMaker('gulu-layout');
    expect(sc('')).toEqual('gulu-layout');
    expect(sc('x')).toEqual('gulu-layout-x');
    expect(sc({y: true, z: false})).toEqual('gulu-layout-y');
    expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('gulu-layout-y gulu-layout-z red');
  });
});
