import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';

import { Anchor } from 'antd';
const { Link } = Anchor;

const Item = Menu.Item;


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const navData = { menu1: '', menu2: '导航二', menu3: '导航三', contact: 'contact' };;
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Link key={i} href={`#${key}`} title={navData[key]}/>));
    return (<TweenOne
      animation={{ opacity: 0, type: 'from' }}
      {...props}>
        <Anchor>
          {navChildren}
        </Anchor>
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header',
};

export default Header;
