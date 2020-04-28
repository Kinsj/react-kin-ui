import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function () {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{height: 200}} className="hi">
          <Header style={{height: 50}}>Header</Header>
          <Content>Content</Content>
          <Footer style={{height: 50}}>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{height: 200}} className="hi">
          <Header style={{height: 50}}>Header</Header>
          <Layout>
            <Aside style={{width: 100}}>Aside</Aside>
            <Content>Content</Content>
          </Layout>
          <Footer style={{height: 50}}>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: 200}} className="hi">
          <Header style={{height: 50}}>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Aside style={{width: 100}}>Aside</Aside>
          </Layout>
          <Footer style={{height: 50}}>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{height: 200}} className="hi">
          <Aside style={{width: 100}}>Aside</Aside>
          <Layout>
            <Header style={{height: 50}}>Header</Header>
            <Content>Content</Content>
            <Footer style={{height: 50}}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};