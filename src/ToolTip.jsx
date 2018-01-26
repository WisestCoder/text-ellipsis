import React, { PropTypes, Component } from 'react';
import Tooltip from 'uxcore-tooltip';

const CgToolTip = ({ displayValue, children, ...otherProps }) => (
  <Tooltip placement={'topLeft'} overlay={displayValue} {...otherProps}>
    {children}
  </Tooltip>
);

CgToolTip.propTypes = {
  displayValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  children: React.PropTypes.element
};

export default CgToolTip;