import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom'
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
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
        <footer className={sc('footer')}>
          {/*{props.buttons}  这种写法直接渲染数组会出现没有key的问题，没有key性能不好，且会报warning, 用以下办法解决*/
            props.buttons.map((button, index) => {
              return React.cloneElement(button, {key: index}); // 用React.cloneElement复制ReactNode并添加属性key即可
            })
          }
        </footer>
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

export default Dialog;