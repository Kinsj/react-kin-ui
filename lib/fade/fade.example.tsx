import React, {useState} from 'react';
import Fade from './fade';

export default function () {
  const [visible, setVisible] = useState(false);
  return (
    <div className="fade-example">
      <button onClick={() => setVisible(!visible)}>toggle</button>
      <Fade visible={visible}>
        <div>数据</div>
      </Fade>
    </div>
  );
}