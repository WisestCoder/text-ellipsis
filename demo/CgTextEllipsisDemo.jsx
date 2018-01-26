/**
 * CgTextEllipsis Component Demo for uxcore
 * @author DuBilin
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import CgTextEllipsis from '../src';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="box">
        <h2>多行文本超出显示省略号组件</h2>
        <h3 className="mt20">1.单行文本超出显示省略号</h3>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <CgTextEllipsis
            uniqueKey="text-ellipsis-1"
            text={'哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长'}
          />
        </div>
        <h3 className="mt20">2.多行文本超出显示省略号</h3>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <CgTextEllipsis
            line={2}
            uniqueKey="text-ellipsis-2"
            text={'哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长'}
          />
        </div>
        <h3 className="mt20">3.右边显示Tip</h3>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <CgTextEllipsis
            line={2}
            tipAlign="right"
            uniqueKey="text-ellipsis-3"
            text={'哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长'}
          />
        </div>
        <h3 className="mt20">4.Tip自定义最大宽度</h3>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <CgTextEllipsis
            line={2}
            maxTipWidth={600}
            uniqueKey="text-ellipsis-4"
            text={'哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长'}
          />
        </div>
        <h3 className="mt20">5.Tip中的文本居中对齐</h3>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <CgTextEllipsis
            line={2}
            tipTextAlign="center"
            uniqueKey="text-ellipsis-5"
            text={'哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长'}
          />
        </div>
        <h3 className="mt20">6.当文本未超出也显示Tip</h3>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <CgTextEllipsis
            line={4}
            isTipAlwaysShow
            uniqueKey="text-ellipsis-6"
            text={'哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长'}
          />
        </div>
        <h3 className="mt20">7.自定义文本超出时显示的文案</h3>
        <div style={{ width: '200px', marginTop: '10px' }}>
          <CgTextEllipsis
            line={2}
            ellipsisChar="***"
            uniqueKey="text-ellipsis-7"
            text={'哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长'}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
