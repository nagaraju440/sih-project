import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
export default class AntdSample extends Component {
  render() {
    return (
      <div>
          <h1>Antd Sample</h1>
           <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
            </div>
    );
  }
}
