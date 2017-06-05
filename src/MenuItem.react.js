'use strict';

import cx from 'classnames';
import {noop} from 'lodash';
import React from 'react';

import menuItemContainer from './containers/menuItemContainer';

class BaseMenuItem extends React.Component {
  displayName = 'BaseMenuItem';

  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    const {active, children, className} = this.props;

    return (
      <li
        className={cx({
          'active': active
        }, className)}>
        <a onClick={this._handleClick} role="button">
          {children}
        </a>
      </li>
    );
  }

  _handleClick(e) {
    const {onClick} = this.props;

    onClick(e);
  }
}

BaseMenuItem.defaultProps = {
  onClick: noop,
};

const MenuItem = menuItemContainer(BaseMenuItem);

export {BaseMenuItem};
export default MenuItem;
