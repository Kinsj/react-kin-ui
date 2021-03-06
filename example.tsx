import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import './example.scss'

import IconExample from './lib/icon/iocn.example';
// import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Footer, Content} from './lib/layout/layout';
import FormExample from './lib/form/form.example';
import FadeExample from './lib/fade/fade.example';
import SliderExample from './lib/slider/slider.example';
// 使用require的方式导入一个 es6 格式的模块，实际引入的是 {default: xxx}，所以必须加 .default
const logo = require('./logo.png').default;

ReactDOM.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="48"  alt=""/>
          <span>JasenUI</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
            <li>
              <NavLink to="/form">表单</NavLink>
            </li>
            <li>
              <NavLink to="/fade">fade</NavLink>
            </li>
            <li>
              <NavLink to="/slider">slider</NavLink>
            </li>
          </ul>
        </Aside>
        <Content>
          <Route path="/icon" component={IconExample}/>
          {/*<Route path="/button" component={ButtonExample}/>*/}
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
          <Route path="/fade" component={FadeExample}/>
          <Route path="/slider" component={SliderExample}/>
        </Content>
      </Layout>
      <Footer>&copy; Jason Kin</Footer>
    </Layout>
  </Router>

), document.querySelector('#root'));
