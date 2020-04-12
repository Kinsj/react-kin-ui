import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

ReactDOM.render(
  <div>
    <Icon name="qq" onClick={
      (e) => {
        console.log(e.target);
      }
    }/>
  </div>
  , document.querySelector('#root'));