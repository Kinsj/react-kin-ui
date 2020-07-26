import React, {useState} from 'react';
import Fade from './fade';
import FadeUp from './fadeUp';
import './fade.example.scss'
import Button from '../button/button';

export default function () {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <div className="fade-example">
      <div>
        <Button onClick={() => setVisible(!visible)}>fade</Button>
        <Fade visible={visible}>
          <div>数据</div>
        </Fade>
      </div>
      <div>
        <Button onClick={() => setVisible2(!visible2)}>fadeUp</Button>
        <FadeUp visible={visible2}>
          <div>数据</div>
        </FadeUp>
      </div>
    </div>
  );
}