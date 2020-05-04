import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import "./layout.example.scss";

export default function () {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout className="frame">
          <Header className="header">Header</Header>
          <Content className="content">Content</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout className="frame">
          <Header className="header">Header</Header>
          <Layout>
            <Aside className="aside">Aside</Aside>
            <Content className="content">Content</Content>
          </Layout>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout className="frame">
          <Header className="header">Header</Header>
          <Layout>
            <Content className="content">Content</Content>
            <Aside className="aside">Aside</Aside>
          </Layout>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout className="frame">
          <Aside className="aside">Aside</Aside>
          <Layout>
            <Header className="header">Header</Header>
            <Content className="content">Content</Content>
            <Footer className="footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};