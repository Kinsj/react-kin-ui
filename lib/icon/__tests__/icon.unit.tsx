import renderer from 'react-test-renderer';
import {mount} from 'enzyme';  // 这个库需要在setupTests.js里配置，详见文件
import React from 'react';
import Icon from '../icon';

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name="qq"/>).toJSON();
    expect(json).toMatchSnapshot(); // 在第一次测试的时候会创建一个网页快照，如果json和网页快照不匹配则会测试不通过，
    // 使用 yarn test -u 可以更新快照
  });
  it("onClick", () => {
    const fn = jest.fn();
    const component = mount(<Icon name="qq" onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled()
  });
});
