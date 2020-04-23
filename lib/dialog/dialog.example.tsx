import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  // openModal 调用 Dialog 组件开放的 modal api
  const openModal = () => {
    // modal的返回值为关闭Dialog操作接口
    const close = modal(<h1>你好
      <button onClick={() => {close();}}>关闭</button>
    </h1>);
  };

  return (
    <div>
      <div>
        <h1>点击背景不关闭</h1>
        <button onClick={() => {setX(!x);}}>click</button>
        <Dialog visible={x} buttons={[
          <button onClick={() => {setX(false);}}>1</button>,
          <button onClick={() => {setX(false);}}>2</button>
        ]} onClose={() => {setX(false);}}>
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>点击背景关闭</h1>
        <button onClick={() => {setY(!y);}}>click</button>
        <Dialog visible={y} closeOnClickMask={true} buttons={[
          <button onClick={() => {setY(false);}}>1</button>,
          <button onClick={() => {setY(false);}}>2</button>
        ]} onClose={() => {setY(false);}}>
          <div>hi</div>
        </Dialog>
      </div>

      <div>
        <h1>alert API</h1>
        <button onClick={() => {alert('hi');}}>alert</button>
        <button
          onClick={() => {
            confirm('hi',
              () => {console.log('你点击了yes');},
              () => {console.log('你点击了no');});
          }}>confirm
        </button>
        <button onClick={openModal}>modal</button>
      </div>
    </div>

  );
}