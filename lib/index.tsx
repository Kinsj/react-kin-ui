import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

ReactDOM.render(
  <div>
    <Icon name="qq" onClick={()=>{console.log(1)}}/>
  </div>
  , document.querySelector('#root'));