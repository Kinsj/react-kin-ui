import React, {useState} from 'react';
import Dialog from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
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
    </div>

  );
}