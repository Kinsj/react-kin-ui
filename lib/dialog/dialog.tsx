import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('gulu-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  // 关闭按钮点击事件
  const closeClickHandle: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  // mask点击事件
  const maskClickHandle: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const dom = props.visible ?
    // Fragment 相当于一个开发阶段的div，用于把几个div包起来。相对直接用div的好处就是在运行时页面不会出现多余的div嵌套
    <Fragment>
      <div className={sc('mask')} onClick={maskClickHandle}/>
      <div className={sc()}>
        <div className={sc('close')} onClick={closeClickHandle}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        {props.buttons && props.buttons.length &&
          <footer className={sc('footer')}>
            {/*{props.buttons}  这种写法直接渲染数组会出现没有key的问题，没有key性能不好，且会报warning, 用以下办法解决*/
              props.buttons && props.buttons.map((button, index) => {
                return React.cloneElement(button, {key: index}); // 用React.cloneElement复制ReactNode并添加属性key即可
              })
            }
          </footer>
        }
      </div>
    </Fragment> :
    null;
  return (
    // 使用传送门函数把 dom 挂载到指定位置
    ReactDOM.createPortal(dom, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

// API:
// 1. alert
const alert = (content: string) => {
  const onCloseHandle = () => {
    // 关闭时无法直接修改visible属性(闭包内部属性)，这里用一个新的组件visible为false来覆盖(我不懂为什么不直接卸载)
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    // 在删除div之前需要先卸载掉组件,否则可能会出现内存泄漏,事件绑定未接触等情况
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = <Dialog
    visible={true}
    onClose={onCloseHandle}
    buttons={[<button onClick={onCloseHandle}>OK</button>]}
  >{content}</Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

// 2. confirm 比 alert 多两个button
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  const component = <Dialog
    visible={true} onClose={onNo}
    buttons={[
      <button onClick={onYes}>yes</button>,
      <button onClick={onNo}>no</button>
    ]}
  >{content}</Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

// 3. modal 输入值为 ReactNode 类型， 返回关闭操作接口
const modal = (content: ReactNode) => {
  const onCloseHandle = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = <Dialog
    onClose={onCloseHandle}
    visible={true}
  >{content}</Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return onCloseHandle;
};

export default Dialog;
export {alert, confirm, modal};